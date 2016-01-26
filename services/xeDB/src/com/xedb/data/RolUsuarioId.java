
package com.xedb.data;

import java.io.Serializable;


/**
 *  xeDB.RolUsuarioId
 *  01/26/2016 10:39:00
 * 
 */
public class RolUsuarioId
    implements Serializable
{

    private String usuario;
    private String codrol;

    public boolean equals(Object o) {
        if (o == this) {
            return true;
        }
        if (!(o instanceof RolUsuarioId)) {
            return false;
        }
        RolUsuarioId other = ((RolUsuarioId) o);
        if (this.usuario == null) {
            if (other.usuario!= null) {
                return false;
            }
        } else {
            if (!this.usuario.equals(other.usuario)) {
                return false;
            }
        }
        if (this.codrol == null) {
            if (other.codrol!= null) {
                return false;
            }
        } else {
            if (!this.codrol.equals(other.codrol)) {
                return false;
            }
        }
        return true;
    }

    public int hashCode() {
        int rtn = 17;
        rtn = (rtn* 37);
        if (this.usuario!= null) {
            rtn = (rtn + this.usuario.hashCode());
        }
        rtn = (rtn* 37);
        if (this.codrol!= null) {
            rtn = (rtn + this.codrol.hashCode());
        }
        return rtn;
    }

    public String getUsuario() {
        return usuario;
    }

    public void setUsuario(String usuario) {
        this.usuario = usuario;
    }

    public String getCodrol() {
        return codrol;
    }

    public void setCodrol(String codrol) {
        this.codrol = codrol;
    }

}
