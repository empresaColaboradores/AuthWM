
package com.xedb.data;



/**
 *  xeDB.RolUsuario
 *  01/26/2016 10:39:00
 * 
 */
public class RolUsuario {

    private RolUsuarioId id;
    private Usuario usuario;
    private Rol rol;

    public RolUsuarioId getId() {
        return id;
    }

    public void setId(RolUsuarioId id) {
        this.id = id;
    }

    public Usuario getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }

    public Rol getRol() {
        return rol;
    }

    public void setRol(Rol rol) {
        this.rol = rol;
    }

}
