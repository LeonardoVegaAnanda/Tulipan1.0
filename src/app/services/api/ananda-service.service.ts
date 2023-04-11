import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from '../util/helper';

@Injectable({
  providedIn: 'root'
})
export class AnandaServiceService {
  baseAnd: string = `${baseUrl}`

  constructor(private http: HttpClient) { }

  public actualizarSurtidor(surtidor: any) {
    return this.http.put(this.baseAnd + "/azafran/surtidor", surtidor);
  }
  public actualizarVerificador(verificador: any) {
    return this.http.put(this.baseAnd + "/azafran/verificador", verificador);
  }
  public asignarSurtidor(idSurtidor, idOrdenVenta) {
    return this.http.put(this.baseAnd + "/azafran/orden_venta/asignarSurtidor/" + idOrdenVenta + "?claveSurtidor=" + idSurtidor, idSurtidor);
  }
  public asignarVerificador(claveVerificador, idOrdenVenta) {
    return this.http.put(this.baseAnd + "/azafran/orden_venta/asignarVerificador/" + idOrdenVenta + "?claveVerificador=" + claveVerificador, claveVerificador);
  }
  public buscarSurtidorPorClave(cve: any) {
    return this.http.get(this.baseAnd + "/azafran/surtidor/cve/" + cve);
  }
  public buscarSurtidorPorOrden(id:any){
    return this.http.get(this.baseAnd+"/azafran/surtidor/orden/"+id);
  }
  public buscarVerificadorPorOrden(id:any){
    return this.http.get(this.baseAnd+"/azafran/verificador/orden/"+id);
  }
  public crearSurtidor(surtidor: any) {
    return this.http.post(this.baseAnd + "/azafran/surtidor", surtidor);
  }
  public crearVerificador(verificador: any) {
    return this.http.post(this.baseAnd + "/azafran/verificador", verificador);
  }
  public eliminarSurtidor(id: any) {
    return this.http.delete(this.baseAnd + "/azafran/surtidor/" + id);
  }
  public eliminarVerificador(id: any) {
    return this.http.delete(this.baseAnd + "/azafran/verificador/" + id);
  }
  public generarTiempoInicioSurtido(id:any,docNum:any){
    return this.http.put(this.baseAnd+"/azafran/registro_tiempo/inicio_surtido/"+id+"?docNum="+docNum,id)
  }
  public generarTiempoTerminoSurtido(id:any,docNum:any){
    return this.http.put(this.baseAnd+"/azafran/registro_tiempo/termino_surtido/"+id+"?docNum="+docNum,id);
  }
  public generarTiempoInicioVerificado(id:any,docNum:any){
    return this.http.put(this.baseAnd+"/azafran/registro_tiempo/inicio_verificado/"+id+"?docNum="+docNum,id);
  }
  public generarTiempoTerminoVerificado(id:any,docNum:any){
    return this.http.put(this.baseAnd+"/azafran/registro_tiempo/termino_verificado/"+id+"?docNum="+docNum,id);
  }
  public listaItems() {
    return this.http.get(this.baseAnd + "/azafran/item");
  }
  public listaPickingDia(fecha: any) {
    return this.http.get(this.baseAnd + "/azafran/picking?fecha=" + fecha);
  }
  public listaOrdenes() {
    return this.http.get(this.baseAnd + "/azafran/orden_venta");
  }
  public listaOrdenesSurtidor(id: any) {
    return this.http.get(this.baseAnd + "/azafran/orden_venta/ordenes/idSurtidor/"+ id);
  }
  public listaRegistros() {
    return this.http.get(this.baseAnd + "/azafran/registro_tiempo");
  }
  public listaSurtidores() {
    return this.http.get(this.baseAnd + "/azafran/surtidor");
  }
  public listaVerificadores() {
    return this.http.get(this.baseAnd + "/azafran/verificador");
  }
  public obtenerPickingById(id: any) {
    return this.http.get(this.baseAnd + "/azafran/picking/id/" + id);
  }
  public obtenerRegistroById(id: any) {
    return this.http.get(this.baseAnd + "/azafran/registro_tiempo/" + id);
  }
  public obtenerItemByItemCode(itemCode: any) {
    return this.http.get(this.baseAnd + "/azafran/item/itemCode/" + itemCode);
  }
  public obtenerPickingByAbsEntry(absEntry: any) {
    return this.http.get(this.baseAnd + "/azafran/picking/absEntry/" + absEntry);
  }
  public obtenerOrdenById(id: any) {
    return this.http.get(this.baseAnd + "/azafran/orden_venta/id/" + id);
  }
  public obtenerOrdenBydocNum(docNum: any) {
    return this.http.get(this.baseAnd + "/azafran/orden_venta/docNum/" + docNum);
  }
  public obtenerSurtidorByClave(clave: any) {
    return this.http.get(this.baseAnd + "/azafran/surtidor/cve/" + clave);
  }
  public obtenerSurtidorById(id: any) {
    return this.http.get(this.baseAnd + "/azafran/surtidor/id/" + id);
  }
  public obtenerVerificadorById(id: any) {
    return this.http.get(this.baseAnd + "/azafran/verificador/id/" + id);
  }
  public obtenerVerificadorByClave(clave: any) {
    return this.http.get(this.baseAnd + "azafran/verificador/cve/" + clave);
  }


}
