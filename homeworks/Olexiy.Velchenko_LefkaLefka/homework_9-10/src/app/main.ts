import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./models/app.module";

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);