import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core';

@NgModule({
  declarations: [AppComponent],
  imports: [CoreModule],
  bootstrap: [AppComponent]
})
export class AppModule {
}
