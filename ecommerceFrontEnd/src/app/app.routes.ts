import { Routes } from '@angular/router';
import { LayoutComponent } from './admin/layout/layout.component';
import { DashboardComponent } from './admin/components/dashboard/dashboard.component';
import { HomeComponent } from './ui/components/home/home.component';

export const routes: Routes = [
    {
        path: "admin", component: LayoutComponent, children: [
            { path: "", component: DashboardComponent },
            { path: "customers", loadChildren: () => import("./admin/components/customer/customer.module").then(module => module.CustomerModule) }, // bu şu anlama gelir -> site.com/admin/customers bundan sonraki kısmı module handle eder.
            { path: "orders", loadChildren: () => import("./admin/components/order/order.module").then(module => module.OrderModule) },
            { path: "products", loadChildren: () => import("./admin/components/products/products.module").then(module => module.ProductsModule) },
        ]
    },
    { path: "", component: HomeComponent },
    { path:"basket", loadChildren : () => import("./ui/components/baskets/baskets.module").then(module => module.BasketsModule)},
    { path:"products", loadChildren : () => import("./ui/components/products/products.module").then(module => module.ProductsModule)},

];
