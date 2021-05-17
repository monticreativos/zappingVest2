import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { AuthService } from './../../services/auth.service';
import { ToastService } from './../../services/toast.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoadingController, AlertController, Platform  } from '@ionic/angular';
import { Router} from '@angular/router';
import { Plugins, KeyboardInfo } from '@capacitor/core';

const { Keyboard } = Plugins;

@Component({
  selector: 'app-take-photo',
  templateUrl: './take-photo.page.html',
  styleUrls: ['./take-photo.page.scss'],
})
export class TakePhotoPage implements OnInit, AfterViewInit{

  postData = {
    id_user: '',
    id_partner: '',
    import: null,
    imgBase64: ''
  };

  postDataPartners = {
    location: ''
  };

  partner:any;
  listParnet: any;

  compareWithFn = (o1, o2) => {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  };

  options: CameraOptions = {
    quality: 84,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    correctOrientation : true
  };

  constructor(
    public http: HttpClient,
    public alertController: AlertController,
    public loadingController: LoadingController,
    private authService: AuthService, 
    private camera: Camera,
    public toastService: ToastService,
    private router: Router,
    private platform: Platform
    ) { 
    }



  ngAfterViewInit(): void {
    this.loadPartners();
  }

  ngOnInit() {
    this.loadPartners();
  }

  optionsFn(value:any){
    this.postData.id_partner = value;
  }

  closeKeyboard(){
    Keyboard.hide();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Attention',
      message: 'vous devez remplir tous les champs antérieurs.',
      buttons: ['OK']
    });

    await alert.present();
  }

  async presentAlertOK() {
    const alert = await this.alertController.create({
      header: 'Confirmé',
      message: 'Ticket envoyé.',
      buttons:  [
        {
          text: 'Ok',
          handler: () => {
            this.router.navigate(['home/tabs/tab1']);
          }
        },
      ]
    });

    await alert.present();
  }


  validateInputs(){
    let id = this.postData.id_partner.trim();
    let importe = this.postData.import;
    console.log("id: "+id);
    console.log("importe: "+importe);
    importe = importe.replace(",", ".");
    this.postData.import = importe;

    return (
      this.postData.id_partner &&
      this.postData.import &&
      id.length > 0 &&
      importe > 0
    );
  }

  loadPartners(){
    let location = window.localStorage.getItem('location');
    this.postDataPartners.location = location;
    this.authService.getAllPartners(this.postDataPartners).subscribe(
      (res: any) => {
        this.listParnet = res;
        console.log(this.listParnet);
      },
      (error: any) => {
        this.toastService.presentToast('Problema en la red.');
      }
    );
  }


   getFileReader(): FileReader {
    const fileReader = new FileReader();
    const zoneOriginalInstance = (fileReader as any)["__zone_symbol__originalInstance"];
    return zoneOriginalInstance || fileReader;
  }

  async readFile(file: any) {
    const loading = await this.loadingController.create({
      message: 'Chargement...',
    });
    await loading.present();
    let user_id = window.localStorage.getItem('id_user');
    this.postData.id_user = user_id;
    this.postData.imgBase64 = file;
    
    this.authService.saveTicket(this.postData).subscribe(
      (res: any) => {
        loading.dismiss();
        console.log(res);
        this.presentAlertOK();
      },
      (error: any) => {
        loading.dismiss();
        this.toastService.presentToast('Problema en la red.');
      }
    );
  }


  takePicture() {
    if (this.validateInputs()){
      this.camera.getPicture(this.options).then((imageData) => {
        console.log(imageData);
        let base64Image = 'data:image/jpeg;base64,' + imageData;
        this.readFile(base64Image);
      }, (err) => {
        console.log(err);
      });
    }else{
      this.presentAlert();
    }
  }
}
