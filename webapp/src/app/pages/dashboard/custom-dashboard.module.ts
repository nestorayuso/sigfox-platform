import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CustomDashboardRoutingModule} from './custom-dashboard-routing.module';
import {CustomDashboardComponent} from './custom-dashboard.component';
import {NgxGaugeModule} from 'ngx-gauge';
import {SelectModule} from 'ng2-select';
import {ToasterModule} from 'angular2-toaster';
import {AgmCoreModule, GoogleMapsAPIWrapper} from '@agm/core';
import {FormsModule} from '@angular/forms';
import {MomentModule} from 'angular2-moment';
import {DataTableModule} from 'angular2-datatable';
import {TooltipModule} from 'ng2-bootstrap';
import {AngularMultiSelectModule} from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';
import {AngularDateTimePickerModule} from 'vk-custom-angular2-datetimepicker';
import {DirectionsDirective} from './directions.directive';
import {AgmJsMarkerClustererModule} from '@agm/js-marker-clusterer';
import {ModalModule} from 'ngx-bootstrap';
import {NvD3Module} from 'ng2-nvd3';
// d3 and nvd3 should be included somewhere
import 'd3';
import 'nvd3';

@NgModule({
  imports: [
    CommonModule,
    CustomDashboardRoutingModule,
    NgxGaugeModule,
    SelectModule,
    FormsModule,
    ToasterModule,
    DataTableModule,
    MomentModule,
    TooltipModule.forRoot(),
    AgmCoreModule,
    AgmJsMarkerClustererModule,
    AngularMultiSelectModule,
    AngularDateTimePickerModule,
    ModalModule.forRoot(),
    NvD3Module
  ],
  providers: [
    GoogleMapsAPIWrapper
  ],
  declarations: [
    CustomDashboardComponent,
    DirectionsDirective
  ]
})
export class CustomDashboardModule {
}
