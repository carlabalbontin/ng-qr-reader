import { Component, ElementRef, ViewChild, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-qr-reader';
  scannerEnabled = false;
  information = 'hola';

  public scanSuccessHandler(event: any) {
    this.scannerEnabled = false;
    this.information = 'Espera recuperando información... ';
    console.log('event');
    console.log('event', event);
    // const appointment = new Appointment($event);
    // this.logService.logAppointment(appointment).subscribe(
      // (result: OperationResponse) => {
      //   this.information = $event;
      //   this.transports = result.object;
      //   this.cd.markForCheck();
      // },
      // (error: any) => {
      //   this.information = "Ha ocurrido un error por favor intentalo nuevamente ... ";
      //   this.cd.markForCheck();
      // });
  }

  public enableScanner() {
    this.scannerEnabled = !this.scannerEnabled;
    this.information = 'No se ha detectado información de ningún código. Acerque un código QR para escanear.';
  }
}
