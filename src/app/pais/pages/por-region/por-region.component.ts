import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `button{
      margin-right:5px;
    }`
  ]
})
export class PorRegionComponent {

  //regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  
  regiones: string[] = ['EU', 'EFTA', 'CARICOM', 'PA', 'AU','USAN','EEU','AL','ASEAN','CAIS','CEFTA','NAFTA','SAARC'];
  regionActiva: string = '';
  paises: Country[]=[];


  constructor(private paisService: PaisService) { }

  activarRegion(region: string) {
    if(region===this.regionActiva){return;}
    this.regionActiva = region;
    this.paises=[];
    this.paisService.buscarPaisesPorRegion(region).subscribe(paises=>{
      this.paises=paises;
      console.log("region: ",paises);
    });
    // TODO: hacer el llamado al servicio
  }

  getClaseCSS(region: string): string {
    return (region == this.regionActiva) ? 'btn-primary' : 'btn-outline-primary';
  }

}
