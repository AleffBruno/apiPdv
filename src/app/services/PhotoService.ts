import { Photo } from "../models/Photo";
import { getConnection } from 'typeorm';

export const savePhoto = async () => {
    let photo = new Photo();
    photo.name = "Me and Bears";
    photo.description = "I am near polar bears";
    photo.filename = "photo-with-bears.jpg";
    photo.views = 1;
    photo.isPublished = true;
    await getConnection().manager.save(photo);
    return photo;
};