import { Component } from '@angular/core';

@Component({
  selector: 'content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {
  features = [
    { title: 'Using Abstract', desc: 'Abstract lets you manage, version, and document your designs in one place.', src: 'assets/abstract-clone/6.png' },
    { title: 'Manage your account', desc: 'Configure your account settings, such as your email, profile details, and password.', src: 'assets/abstract-clone/5.png' },
    { title: 'Manage organizations, teams, and projects', desc: 'Use Abstract organizations, teams, and projects to organize your people and your work.', src: 'assets/abstract-clone/4.png' },
    { title: 'Manage billing', desc: 'Change subscriptions and payment details.', src: 'assets/abstract-clone/3.png' },
    { title: 'Authenticate to Abstract', desc: 'Set up and configure SSO, SCIM, and Just-in-Time provisioning.', src: 'assets/abstract-clone/2.png' },
    { title: 'Abstract support', desc: 'Get in touch with a human.', src: 'assets/abstract-clone/1.png' },
  ];
}
