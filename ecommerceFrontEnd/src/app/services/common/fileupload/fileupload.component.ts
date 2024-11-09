import { Component, Input } from '@angular/core';
import { NgxFileDropEntry, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';
import { HttpClientService } from '../http-client.service';
import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { AlertifyService, MessageType, Position } from '../../admin/alertify.service';
import { CustomToastrService, ToastrMessageType, ToastrPosition } from '../../ui/custom-toastr.service';

@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrl: './fileupload.component.scss'
})

export class FileUploadComponent {

  constructor(private httpClientService: HttpClientService, private alertifyService: AlertifyService, private customToastrService: CustomToastrService) {

  }

  @Input() options!: Partial<FileUploadOptions>;

  public files: NgxFileDropEntry[] = [];

  public dropped(files: NgxFileDropEntry[]) {
    this.files = files;
    const fileData: FormData = new FormData();

    for (const file of files) {
      (file.fileEntry as FileSystemFileEntry).file((_file: File) => {
        fileData.append(_file.name, _file, file.relativePath);
      });

      this.httpClientService.post({
        controller: this.options.controller,
        action: this.options.action,
        queryString: this.options.queryString,
        headers: new HttpHeaders({ "responseType": "blob" })
      }, fileData).subscribe(data => {
        const message : string = "Dosyalar başarıyla yüklenmiştir!";

        if (this.options.isAdminPage) {
          this.alertifyService.message(message,{
            messageType : MessageType.Success,
            position: Position.TopRight
          })
        }
        else {
          this.customToastrService.message(message,"Başarılı",ToastrMessageType.Success,ToastrPosition.TopRight);
        }
      }, (errorResponse: HttpErrorResponse) => {
        const message : string = "Bir hata oluştu. ";

        if (this.options.isAdminPage) {
          this.alertifyService.message(message +errorResponse.error,{
            messageType : MessageType.Error,
            position: Position.TopRight
          })
        }
        else {
          this.customToastrService.message(message,"Hata",ToastrMessageType.Error,ToastrPosition.TopRight);
        }
      });

    }

  }

  public fileOver(event: any) {
    console.log(event);
  }

  public fileLeave(event: any) {
    console.log(event);
  }
}

export class FileUploadOptions {
  controller?: string;
  action?: string;
  queryString?: string;
  explanation?: string;
  accept?: string;
  isAdminPage?: boolean = false;
}


//for (const droppedFile of files) {

//  // Is it a file?
//  if (droppedFile.fileEntry.isFile) {
//    const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
//    fileEntry.file((file: File) => {
//
//      // Here you can access the real file
//      console.log(droppedFile.relativePath, file);
//
//      /**
//      // You could upload it like this:
//      const formData = new FormData()
//      formData.append('logo', file, relativePath)
//
//      // Headers
//      const headers = new HttpHeaders({
//        'security-token': 'mytoken'
//      })
//
//      this.http.post('https://mybackend.com/api/upload/sanitize-and-save-logo', formData, { headers: headers, responseType: 'blob' })
//      .subscribe(data => {
//        // Sanitized logo returned from backend
//      })
//      **/
//
//    });
//  } else {
//    // It was a directory (empty directories are added, otherwise only files)
//    const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
//    console.log(droppedFile.relativePath, fileEntry);
//  }
//}