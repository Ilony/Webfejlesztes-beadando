import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app.component';  
import { DatePipe } from '@angular/common'; 

bootstrapApplication(AppComponent, {
  providers: [DatePipe]  
})
.catch(err => console.error(err));
