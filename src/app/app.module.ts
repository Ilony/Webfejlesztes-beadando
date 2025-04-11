import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app.component';  // Standalone komponens importálása
import { DatePipe } from '@angular/common'; // DatePipe importálása

bootstrapApplication(AppComponent, {
  providers: [DatePipe]  // A DatePipe hozzáadása provider-ként
})
.catch(err => console.error(err));
