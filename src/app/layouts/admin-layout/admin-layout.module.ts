import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import {StorageComponent} from '../../storage/storage.component';
import {ProductsComponent} from '../../products/products.component';
import {MaterialComponent} from '../../material/material.component';
import {ReportsComponent} from '../../reports/reports.component';
import {SettingsComponent} from '../../settings/settings.component';
import {PersonalComponent} from '../../personal/personal.component';
import {OrdersComponent} from '../../orders/orders.component';
import {MatIconModule} from '@angular/material/icon';
import {ReportsSalaryComponent} from '../../reports-salary/reports-salary.component';
import {ReportsRentComponent} from '../../reports-rent/reports-rent.component';
import {ReportsTransferComponent} from '../../reports-transfer/reports-transfer.component';
import {ReportsGetingComponent} from '../../reports-geting/reports-geting.component';
import {ReportsProductsComponent} from '../../reports-products/reports-products.component';
import {ReportsMaterialsComponent} from '../../reports-materials/reports-materials.component';
import {SettingsColorsComponent} from '../../settings-colors/settings-colors.component';
import {SettingsPersonalComponent} from '../../settings-personal/settings-personal.component';
import {PersonalRecordComponent} from '../../personal-record/personal-record.component';
import {ProductsRecordComponent} from '../../products-record/products-record.component';
import {MaterialRecordComponent} from '../../material-record/material-record.component';
import {StorageRecordComponent} from '../../storage-record/storage-record.component';
import {StorageAddComponent} from '../../storage-add/storage-add.component';
import {StorageGetingComponent} from '../../storage-geting/storage-geting.component';
import {StorageTransferComponent} from '../../storage-transfer/storage-transfer.component';
import {OrdersRecordComponent} from '../../orders-record/orders-record.component';
import {SettingsPositionComponent} from '../../settings-position/settings-position.component';
import {ModalAddTask} from '../../dashboard/modal/add-task';
import {MatDialogModule} from '@angular/material/dialog';
import {ModalAddOrders} from '../../orders/modal/add-orders';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {ModalAddStorage} from '../../storage/modal/add-storage';
import {ModalAddMaterialStorage} from '../../storage-record/modal/add-material-storage';
import {ModalAddProductsStorage} from '../../storage-record/modal/add-products-storage';
import {StorageRecordItemsComponent} from '../../storage-record-items/storage-record-items.component';
import {ModalAddMaterial} from '../../material/modal/add-material';
import {ModalAddProductsList} from '../../products/modal/add-products-list';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(AdminLayoutRoutes),
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatRippleModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatTooltipModule,
        MatIconModule,
        MatDialogModule,
        MatDatepickerModule,
    ],
  declarations: [
    DashboardComponent,
    ModalAddTask,
    ModalAddOrders,
      ModalAddMaterialStorage,
      ModalAddProductsStorage,
      ModalAddProductsList,
      StorageRecordItemsComponent,
  ModalAddStorage,
    OrdersComponent,
    StorageComponent,
    ReportsComponent,
      ModalAddMaterial,
    ReportsSalaryComponent,
    ReportsRentComponent,
    MaterialRecordComponent,
    ProductsRecordComponent,
    ReportsTransferComponent,
    ReportsGetingComponent,
    ReportsProductsComponent,
    StorageRecordComponent,
    StorageAddComponent,
    StorageGetingComponent,
    OrdersRecordComponent,
    StorageTransferComponent,
    ReportsMaterialsComponent,
    SettingsComponent,
    SettingsColorsComponent,
    SettingsPositionComponent,
    SettingsPersonalComponent,
    PersonalComponent,
    PersonalRecordComponent,
    ProductsComponent,
    MaterialComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
  ]
})

export class AdminLayoutModule {}
