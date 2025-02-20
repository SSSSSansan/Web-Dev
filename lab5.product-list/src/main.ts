import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { ProductListComponent } from './app/product-list/product-list.component';

bootstrapApplication(AppComponent, {
  providers: [provideRouter([{ path: '', component: ProductListComponent }])],
}).catch((err) => console.error(err));
