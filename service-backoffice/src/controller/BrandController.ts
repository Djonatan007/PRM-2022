import { TypeORMError } from 'typeorm';
import { Request, Response } from 'express';
import { Brand } from '../entity/Brand';

class BrandController{

    public async index(request: Request, response: Response){
        try {
            const brands = await Brand.find();
            return response.json(brands);
        } catch (e) {
            const error = e as TypeORMError;
            return response.status(500).json({message: error.message});
        }
    }

    public async create(request: Request, response: Response){
        try {
            const brand = await Brand.save(request.body);
            return response.status(201).json(brand);
        } catch (e) {
            const error = e as TypeORMError;
            return response.status(500).json({message: error.message});
        }
    }

    public async show(request: Request, response: Response){
        try {
            const {id} = request.params;
            if(!id){
                return response.status(400).json({message: "Parâmetro ID não informado"})
            }

            const found = await Brand.findOneBy({id: Number(id)});

            if (!found){
                return response.status(404).json({message: "Recurso não encontrado"})  
            }

            return response.json(found);
        } catch (e) {
            const error = e as TypeORMError;
            return response.status(500).json({message: error.message});
        }
    }

    public async update(request: Request, response: Response){
        try {
            const {id} = request.params;
            if(!id){
                return response.status(400).json({message: "Parâmetro ID não informado"})
            }

            const found = await Brand.findOneBy({id: Number(id)});

            if (!found){
                return response.status(404).json({message: "Recurso não encontrado"})  
            }

            const brand = await Brand.update(found.id, request.body);

            return response.json(brand);
        } catch (e) {
            const error = e as TypeORMError;
            return response.status(500).json({message: error.message});
        }
    }

    public async remove(request: Request, response: Response){
        try {
            const {id} = request.params;
            if(!id){
                return response.status(400).json({message: "Parâmetro ID não informado"})
            }

            const found = await Brand.findOneBy({id: Number(id)});

            if (!found){
                return response.status(404).json({message: "Recurso não encontrado"})  
            }

            await found.remove();

            return response.status(204).json(); 
        } catch (e) {
            const error = e as TypeORMError;
            return response.status(500).json({message: error.message});
        }
    }


}

export default new BrandController();