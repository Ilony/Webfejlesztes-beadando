import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';  // Helyes importálás


bootstrapApplication(AppComponent)
  .catch(err => console.error(err));
