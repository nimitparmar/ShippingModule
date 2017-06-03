import '../polyfills';

//here platformBrowserDynamic is a function that is imported from @angular/platform-browser-dynamic
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule);