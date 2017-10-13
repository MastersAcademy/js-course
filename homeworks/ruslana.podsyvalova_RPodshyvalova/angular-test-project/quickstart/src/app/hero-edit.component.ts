import { Component,Input, OnInit, OnChanges, ElementRef, ViewChild  } from '@angular/core';
import { Hero } from './hero';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';
import { HeroService } from './hero.service';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder} from '@angular/forms';

@Component({
    selector: 'my-hero-edit',
    templateUrl: 'hero-edit.component.html',
    styleUrls: ['hero-edit.component.css']
})

export class HeroEditComponent implements OnInit, OnChanges {
    @Input() hero: Hero;
    antiheroes: string[];
    heroForm: FormGroup;
    filesToUpload: Array<File>;
    @ViewChild('photo') image: ElementRef;
   
    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute,
        private location: Location,
        private fb: FormBuilder) {
            this.filesToUpload = [];
    }  
    
    ngOnInit(): void {
        this.createForm();
        this.getAntiheroes();
        this.route.params
            .switchMap((params: Params) => this.heroService.getHero(+params['id']))
            .subscribe((hero: any) => {
                this.hero = hero;
                this.heroForm = this.fb.group({
                    id: this.hero.id,
                    name: this.hero.name,
                    photo: this.hero.photo,
                    antihero: this.hero.antihero
                });
        
            });
    }
    
    createForm() {
        this.heroForm = this.fb.group({
            id: 0,
            name: ['', Validators.required],
            photo: ['', Validators.required],
            antihero: ''
        }        
    )};
    
    ngOnChanges(){
        this.heroForm.reset({
            id: this.hero.id,
            name: this.hero.name,
            photo: this.hero.photo,
            antihero: this.hero.antihero
        });
    }
   
    onSubmit() {
        this.hero = this.prepareSaveHero();
        this.save();
        this.ngOnChanges();
    }
      
    prepareSaveHero(): Hero {
        const formModel = this.heroForm.value;
        const saveHero: Hero = {
            id: this.hero.id,
            name: formModel.name as string,
            photo: formModel.photo as string, 
            antihero: formModel.antihero as string
        };
        return saveHero;
    }
    
    revert() { 
        this.ngOnChanges(); 
    }
    
    getAntiheroes(): void {
        this.heroService.getAntiheroes().then(antiheroes => 
            this.antiheroes = antiheroes);
    }

    clearPhoto(event: any) {
        event.preventDefault();
        this.hero.photo = '';
        this.heroForm.value.photo = '';
    }
    
    goBack(): void {
        this.location.back();
    }
    
    save(): void {
        this.heroService
            .update(this.hero)
            .then(() => this.goBack());
//        this.upload();

    }
    
//    upload() {
//        this.makeFileRequest("http://server/api/upload", [], this.filesToUpload).then((result) => {
//            console.log(result);
//        }, (error) => {
//            console.error(error);
//        });
//    }
 
    fileChangeEvent(fileInput: any){
        this.filesToUpload = <Array<File>> fileInput.target.files;
        let fileReader = new FileReader();
        let dataUrl: any;
        let domImage = this.image;
        fileReader.onload = function(e) {
            dataUrl = this.result;
            console.log( dataUrl);
            domImage.nativeElement.src = dataUrl;
                 
        }
        fileReader.readAsDataURL(this.filesToUpload[0]);
        
        this.hero.photo = this.filesToUpload[0].name;
        this.heroForm.value.photo = this.filesToUpload[0].name;
    }
 
//    makeFileRequest(url: string, params: Array<string>, files: Array<File>) {
//        return new Promise((resolve, reject) => {
//            var formData: any = new FormData();
//            var xhr = new XMLHttpRequest();
//            for(var i = 0; i < files.length; i++) {
//                formData.append("uploads[]", files[i], files[i].name);
//            }
//            xhr.onreadystatechange = function () {
//                if (xhr.readyState == 4) {
//                    if (xhr.status == 200) {
//                        resolve(JSON.parse(xhr.response));
//                    } else {
//                        reject(xhr.response);
//                    }
//                }
//            }
//            xhr.open("POST", url, true);
//            xhr.send(formData);
//        });
//    }
}