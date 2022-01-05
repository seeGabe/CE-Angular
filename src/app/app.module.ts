import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputMaskModule } from 'primeng/inputmask';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { CardModule } from 'primeng/card';
import { NgChartsModule } from 'ng2-charts';
import { CuHeaderComponent } from './cu-header/cu-header.component';
import { CuFooterComponent } from './cu-footer/cu-footer.component';
import { CuMainComponent } from './cu-main/cu-main.component';
import { CuMembersComponent } from './cu-members/cu-members.component';
import { CuStatsComponent } from './cu-stats/cu-stats.component';
import { CuHomeComponent } from './cu-main/cu-home/cu-home.component';
import { CuContactComponent } from './cu-contact/cu-contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CuTableComponent } from './cu-table/cu-table.component';
import { CuChartComponent } from './cu-chart/cu-chart.component';
import { CuGraphComponent } from './cu-graph/cu-graph.component';
import 'chartjs-adapter-moment';
import { CuLineGraphComponent } from './cu-line-graph/cu-line-graph.component';

@NgModule({
  declarations: [
    AppComponent,
    CuHeaderComponent,
    CuFooterComponent,
    CuMainComponent,
    CuMembersComponent,
    CuStatsComponent,
    CuHomeComponent,
    CuContactComponent,
    CuTableComponent,
    CuChartComponent,
    CuGraphComponent,
    CuLineGraphComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    DialogModule,
    DynamicDialogModule,
    AccordionModule,
    ButtonModule,
    InputTextModule,
    InputTextareaModule,
    InputMaskModule,
    CardModule,
    TableModule,
    ToastModule,
    NgChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
