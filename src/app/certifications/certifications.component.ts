import { Component, OnInit } from '@angular/core';
import { IProfil } from '../Profil';
import { DataServiceService } from '../shared/api/data-service.service';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.css']
})
export class CertificationsComponent implements OnInit {

  resulat: IProfil[] = [];
  errorMessage = '';
  certificats: any = {};


  constructor(private dataService: DataServiceService) { }

  ngOnInit(): void {
    this.dataService.getAllInformation().subscribe({
      next: (data) => {
        this.resulat = data;
        this.certificats = this.resulat[0]['certification'];
      },
      error: (err) => (this.errorMessage = err),
    });
  }

}
