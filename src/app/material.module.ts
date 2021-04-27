import { NgModule } from "@angular/core";

import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from "@angular/material/input";
import {MatGridListModule} from '@angular/material/grid-list';
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";

@NgModule({
  exports:[
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatInputModule,

  ]
})

export class MaterialModule{

}

