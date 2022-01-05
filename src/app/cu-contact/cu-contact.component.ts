import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'cu-contact',
  templateUrl: './cu-contact.component.html',
  styleUrls: ['./cu-contact.component.scss'],
})
export class CuContactComponent implements OnInit {
  contactForm!: FormGroup;
  loading = false;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('[- +()0-9]{10,}')]],
      message: ['', [Validators.required, Validators.maxLength(120)]],
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.contactForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.contactForm.invalid) {
      return;
    }
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 2000);

    let formdata = this.contactForm.value;
    let email = formdata.email;
    let name = formdata.name;
    let phone = formdata.phone;
    let message = formdata.message;

    let mailStr = `mailto:${email}?subject=Thanks for connecting with us, ${name}.&body=`;
    mailStr += `Someone will make sure to reach out to you, on ${phone} as soon as possible.`;
    mailStr += `We appreciate you taking the time to tell us, "${message}"; hope to hear more about it..!`;

    let sendBtn = <HTMLAnchorElement>document.getElementById('zap');
    sendBtn.href = mailStr;
    sendBtn.click();
  }
}
