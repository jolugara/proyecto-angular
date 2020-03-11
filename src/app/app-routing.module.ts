import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ProyectsComponent } from './components/proyects/proyects.component';
import { CreateComponent } from './components/create/create.component';
import { ContactComponent } from './components/contact/contact.component';
import { ErrorComponent } from './components/error/error.component';
import { DetailComponent } from './components/detail/detail.component';
import { EditComponent } from './components/edit/edit.component';


const routes: Routes = [
  {path: '', component: AboutComponent},
  {path: 'sobre-mi', component: AboutComponent},
  {path: 'proyectos', component: ProyectsComponent},
  {path: 'crear-proyecto', component: CreateComponent},
  {path: 'contacto', component: ContactComponent},
  {path: 'proyecto/:id', component: DetailComponent},
  {path: 'editar-proyecto/:id', component: EditComponent},
  {path: '**', component: ErrorComponent}
];

export const appRoutingProviders: any[] = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
