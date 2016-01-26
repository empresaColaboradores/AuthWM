
package com.xedb.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  xeDB.Usuario
 *  01/26/2016 10:39:00
 * 
 */
public class Usuario {

    private String usuario;
    private String nombre;
    private String pwd;
    private Set<com.xedb.data.RolUsuario> rolUsuarios = new HashSet<com.xedb.data.RolUsuario>();

    public String getUsuario() {
        return usuario;
    }

    public void setUsuario(String usuario) {
        this.usuario = usuario;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getPwd() {
        return pwd;
    }

    public void setPwd(String pwd) {
        this.pwd = pwd;
    }

    public Set<com.xedb.data.RolUsuario> getRolUsuarios() {
        return rolUsuarios;
    }

    public void setRolUsuarios(Set<com.xedb.data.RolUsuario> rolUsuarios) {
        this.rolUsuarios = rolUsuarios;
    }

}
