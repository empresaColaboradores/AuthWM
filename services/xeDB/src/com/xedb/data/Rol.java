
package com.xedb.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  xeDB.Rol
 *  01/26/2016 10:39:00
 * 
 */
public class Rol {

    private String codrol;
    private String rol;
    private Set<com.xedb.data.RolUsuario> rolUsuarios = new HashSet<com.xedb.data.RolUsuario>();

    public String getCodrol() {
        return codrol;
    }

    public void setCodrol(String codrol) {
        this.codrol = codrol;
    }

    public String getRol() {
        return rol;
    }

    public void setRol(String rol) {
        this.rol = rol;
    }

    public Set<com.xedb.data.RolUsuario> getRolUsuarios() {
        return rolUsuarios;
    }

    public void setRolUsuarios(Set<com.xedb.data.RolUsuario> rolUsuarios) {
        this.rolUsuarios = rolUsuarios;
    }

}
