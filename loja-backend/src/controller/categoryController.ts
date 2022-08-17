import { TypeORMError } from 'typeorm';
import { Request, Response } from 'express';
import { Category } from './../entity/Category';

class CategoryController{

    public async index(request: Request, response: Response){
        try {
            const categoryes = await Category.find();
            return response.json(categoryes);
        } catch (e) {
            const error = e as TypeORMError;
            return response.status(500).json({message: error.message});
        }
    }

    public async create(request: Request, response: Response){
        try {
            const category = await Category.save(request.body);
            return response.status(201).json(category);
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

            const found = await Category.findOneBy({id: Number(id)});

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

            const found = await Category.findOneBy({id: Number(id)});

            if (!found){
                return response.status(404).json({message: "Recurso não encontrado"})  
            }

            const category = await Category.update(found.id, request.body);

            return response.json(category);
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

            const found = await Category.findOneBy({id: Number(id)});

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

export default new CategoryController();