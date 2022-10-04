import { Router } from 'express';
import BrandController from './controller/BrandController';
import CategoryController from './controller/CategoryController';
import CityController from './controller/CityController';
import CustomerController from './controller/CustomerController';
import OrderController from './controller/OrderController';
import ProductController from './controller/ProductController';
import StateController from './controller/StateController';

//Instancio o reouter do express
const routes = Router();

//Rotas da Brand
routes.route('/brands')
    .get(BrandController.index)
    .post(BrandController.create);

routes.route('/brands/:id')
    .get(BrandController.show)
    .put(BrandController.update)
    .delete(BrandController.remove);


//Rotas da Category
routes.route('/categories')
    .get(CategoryController.index)
    .post(CategoryController.create);

routes.route('/categories/:id')
    .get(CategoryController.show)
    .put(CategoryController.update)
    .delete(CategoryController.remove);


//Rotas da Product
routes.route('/products')
    .get(ProductController.index)
    .post(ProductController.create);

routes.route('/products/:id')
    .get(ProductController.show)
    .put(ProductController.update)
    .delete(ProductController.remove);

    //Rotas da City
routes.route('/citys')
.get(CityController.index)
.post(CityController.create);

routes.route('/citys/:id')
.get(CityController.show)
.put(CityController.update)
.delete(CityController.remove);

//Rotas do State
routes.route('/states')
.get(StateController.index)
.post(StateController.create);

routes.route('/states/:id')
.get(StateController.show)
.put(StateController.update)
.delete(StateController.remove);

//Rotas do Customer
routes.route('/customers')
.get(CustomerController.index)
.post(CustomerController.create);

routes.route('/customers/:id')
.get(CustomerController.show)
.put(CustomerController.update)
.delete(CustomerController.remove);

//Rotas do Orders
routes.route('/orders')
.get(OrderController.index)
.post(OrderController.create);

routes.route('/orders/:id')
.get(OrderController.show)
.put(OrderController.cancel)


export default routes;