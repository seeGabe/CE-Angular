import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'cu-header',
  templateUrl: './cu-header.component.html',
  styleUrls: ['./cu-header.component.scss'],
})
export class CuHeaderComponent {
  constructor(private router: Router) {}
}
