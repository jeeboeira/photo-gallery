import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Directory, Filesystem } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root'
})

export class PhotoService {
  public photos: UserPhoto[] = [];

  public async addNewToGallery() {
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });

    const savedImage = await this.savePicture(capturedPhoto);
    this.photos.unshift(savedImage);

    // Salva no armazenamento local
    Preferences.set({
      key: 'photos',
      value: JSON.stringify(this.photos),
    });
  }

  // Carrega as fotos ao iniciar o app
  public async loadSaved() {
    const {value} = await Preferences.get({ key: 'photos'});
    this.photos = value ? JSON.parse(value) : [];

    for (let photo of this.photos) {
      const file = await Filesystem.readFile({
        path: photo.filepath,
        directory: Directory.Data
      });

      photo.webviewPath = `data:image/jpeg;base64,${file.data}`;
    }
  }

  private async readAsBase64(photo:Photo): Promise<string> {
    // 1. Buscar a imagen via URL (webPath)
    const response = await fetch(photo.webPath!);
    
    // 2. Pegar o conteúdo da imagem como blob
    const blob = await response.blob();

    // 3. Converter blob para base64 usando FileReader
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = () => {
        resolve(reader.result as string);
      };

      reader.onerror = reject;

      reader.readAsDataURL(blob);
    });
  }

  private async savePicture(photo: Photo): Promise<UserPhoto> {
    // 1. Converte a imagem em base64
    const base64Data = await this.readAsBase64(photo);

    // 2. Cria um nome único pro arquivo com timestamp
    const fileName = new Date().getTime() + '.jpeg';

    // 2. Salva a imagem no sistema de arquivos do dispositivo
    await Filesystem.writeFile({
      path: fileName,
      data: base64Data, // esse precisa estar em base64
      directory: Directory.Data
    });

    // 4. Retorna o caminho virtual da imagem salva, pro app poder mostrar
    return {
      filepath: fileName,
      webviewPath: photo.webPath // essa URL ainda serve para exibir a imagem
    }
  }
}

export interface UserPhoto {
  filepath: string;
  webviewPath?: string;
}



