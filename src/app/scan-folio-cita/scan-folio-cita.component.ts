import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Appointment } from './appointment.model';
import { OperationResponse } from './response.model';

@Component({
  selector: 'app-scan-folio-cita',
  templateUrl: './scan-folio-cita.component.html',
  styleUrls: ['./scan-folio-cita.component.scss']
})
export class ScanFolioCitaComponent implements OnInit {
  scannerEnabled = true;
  transports: Transport[] = [];
  information = 'No se ha detectado información de ningún código. Acerque un código QR para escanear.';

  constructor(
    // private logService: LogService,
    private cd: ChangeDetectorRef) {
  }

  ngOnInit() {
  }

  public scanSuccessHandler($event: any) {
    this.scannerEnabled = false;
    this.information = 'Espera recuperando información... ';

    const appointment = new Appointment($event);
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

interface Transport {
  plates: string;
  slot: Slot;
}

interface Slot {
  name: string;
  description: string;
}
