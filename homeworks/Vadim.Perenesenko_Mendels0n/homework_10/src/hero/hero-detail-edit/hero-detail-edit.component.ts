import {Component, Input} from "@angular/core";
import {Hero} from "../../Hero";

@Component({
  selector:'hero-detail-edit',
  templateUrl:'hero-detail-edit.component.html',
  styleUrls:['hero-detail-edit.component.scss']
})
export class HeroDetailEditComponent {
 @Input()
  hero:Hero;
}
