import { NgforComponent } from './ngfor/ngfor.component';
import { NgifComponent } from './ngif/ngif.component';
import { NgclassComponent } from './ngclass/ngclass.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { NgstyleComponent } from './ngstyle/ngstyle.component';
import { NgelseComponent } from './ngelse/ngelse.component';
import { Routes } from '@angular/router';
import { NgmodelComponent } from './ngmodel/ngmodel.component';
import { from } from 'rxjs';


export const appRoutes: Routes = [
    { path: 'ngfor', component: NgforComponent},
    { path: 'ngif', component: NgifComponent},
    { path: 'ngclass', component: NgclassComponent},
    { path: 'ngswitch', component: NgswitchComponent},
    { path: 'ngstyle', component: NgstyleComponent},
    { path: 'ngmodel', component: NgmodelComponent},
    { path: 'ngelse', component: NgelseComponent}
];
