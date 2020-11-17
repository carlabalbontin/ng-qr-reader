import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgQRCodeReaderModule } from 'ng2-qrcode-reader';
import { ZXingScannerModule } from '@zxing/ngx-scanner';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScanFolioCitaComponent } from './scan-folio-cita/scan-folio-cita.component';
import { UploadQrComponent } from './upload-qr/upload-qr.component';

@NgModule({
  declarations: [
    AppComponent,
    ScanFolioCitaComponent,
    UploadQrComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgQRCodeReaderModule,
    ZXingScannerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
