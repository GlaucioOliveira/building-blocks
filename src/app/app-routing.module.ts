import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsletterOneComponent } from './newsletter-one/newsletter-one.component';

const routes: Routes = [
  {
    path: '', component: NewsletterOneComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
