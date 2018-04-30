// import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environment';
import 'rxjs/add/operator/map';

/*
  Generated class for the GoogleCloudVisionServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GoogleCloudVisionServiceProvider {

  constructor(public http: Http) {
    console.log('Hello GoogleCloudVisionServiceProvider Provider');
  }

  getLabels(base64Image) {
    const body = {
      "requests": [
        {
          "image": {
            "content": base64Image
          },
          "features": [
            {
              //using label detection feature
              //https://cloud.google.com/vision/docs/reference/rest/v1/images/annotate#Feature
              "type": "LABEL_DETECTION"
            }
          ]
        }
      ]
    }
    return this.http.post('https://vision.googleapis.com/v1/images:annotate?key=' + environment.firebaseConfig.googleCloudVisionAPIKey, body);
  }
}
