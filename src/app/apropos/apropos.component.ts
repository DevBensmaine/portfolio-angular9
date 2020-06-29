import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../shared/api/data-service.service';
import { IProfil } from '../Profil';

@Component({
  selector: 'app-apropos',
  templateUrl: './apropos.component.html',
  styleUrls: ['./apropos.component.css'],
})
export class AproposComponent implements OnInit {
  resulat: IProfil[] = [];
  errorMessage = '';
  aproos: any = {};

  constructor(private dataService: DataServiceService) {}

  ngOnInit() {
    this.dataService.getAllInformation().subscribe({
      next: (data) => {
        this.resulat = data;
        this.aproos = this.resulat[0]['apropos'];
      },
      error: (err) => (this.errorMessage = err),
    });
  }
}
