import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import {StorageComponent} from '../../storage/storage.component';
import {MaterialComponent} from '../../material/material.component';
import {ProductsComponent} from '../../products/products.component';
import {ReportsComponent} from '../../reports/reports.component';
import {SettingsComponent} from '../../settings/settings.component';
import {PersonalComponent} from '../../personal/personal.component';
import {OrdersComponent} from '../../orders/orders.component';
import {ReportsMaterialsComponent} from '../../reports-materials/reports-materials.component';
import {ReportsProductsComponent} from '../../reports-products/reports-products.component';
import {ReportsTransferComponent} from '../../reports-transfer/reports-transfer.component';
import {ReportsGetingComponent} from '../../reports-geting/reports-geting.component';
import {ReportsSalaryComponent} from '../../reports-salary/reports-salary.component';
import {ReportsRentComponent} from '../../reports-rent/reports-rent.component';
import {SettingsColorsComponent} from '../../settings-colors/settings-colors.component';
import {SettingsPersonalComponent} from '../../settings-personal/settings-personal.component';
import {PersonalRecordComponent} from '../../personal-record/personal-record.component';
import {ProductsRecordComponent} from '../../products-record/products-record.component';
import {MaterialRecordComponent} from '../../material-record/material-record.component';
import {StorageRecordComponent} from '../../storage-record/storage-record.component';
import {OrdersRecordComponent} from '../../orders-record/orders-record.component';
import {SettingsPositionComponent} from '../../settings-position/settings-position.component';
import {StorageGetingComponent} from '../../storage-geting/storage-geting.component';
import {StorageTransferComponent} from '../../storage-transfer/storage-transfer.component';
import {StorageRecordItemsComponent} from '../../storage-record-items/storage-record-items.component';

export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: StorageComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'orders',   component: OrdersComponent },
    { path: 'orders/:id',   component: OrdersRecordComponent },
    { path: 'orders/edit/:id',   component: OrdersRecordComponent },
    { path: 'storage',   component: StorageComponent },
    { path: 'storage/geting',   component: StorageGetingComponent },
    { path: 'storage/transfer',   component: StorageTransferComponent },
    { path: 'storage/edit/:id',   component: StorageRecordComponent },
    { path: 'storage/:id',   component: StorageRecordComponent },


    { path: 'settings',   component: SettingsComponent },
    { path: 'settings/color',   component: SettingsColorsComponent },
    { path: 'settings/position',   component: SettingsPositionComponent },
    { path: 'personal',   component: PersonalComponent },
    { path: 'personal/:id',   component: PersonalRecordComponent },
    { path: 'personal/edit/:id',   component: PersonalRecordComponent },
    { path: 'material',   component: MaterialComponent },
    { path: 'material/:id',   component: MaterialRecordComponent },
    { path: 'material/edit/:id',   component: MaterialRecordComponent },
    { path: 'storage/storage-edit-material/:id',   component: StorageRecordItemsComponent },
    { path: 'products',   component: ProductsComponent },
    { path: 'products/:id',   component: ProductsRecordComponent },
    { path: 'products/edit/:id',   component: ProductsRecordComponent },
    { path: 'storage/storage-edit-product/:id',   component: StorageRecordItemsComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },

    { path: 'reports',   component: ReportsComponent },
    { path: 'reports/materials',   component: ReportsMaterialsComponent },
    { path: 'reports/products',   component: ReportsProductsComponent },
    { path: 'reports/transfer',   component: ReportsTransferComponent },
    { path: 'reports/geting',   component: ReportsGetingComponent },
    { path: 'reports/salary',   component: ReportsSalaryComponent },
    { path: 'reports/rent',   component: ReportsRentComponent },

];
