import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserFilter } from '../models/UserFilter';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private readonly END_POINT = 'api/AdminUsers/';
  
  constructor(private http: HttpClient) { }

  GetUsersList(filter) {
    return this.http.get( this.END_POINT + '?' +  this.toQueryString(filter));
  }

  toQueryString(obj: UserFilter) {
    const parts = [];
    const filter = [];
    
    if ( obj.MinDate && obj.MaxDate ) {
      filter.push(` Last_Update ge ${obj.MinDate} and Last_Update le ${obj.MaxDate} `);
    }

    if (obj.Search) {
      if (this.isComplexSearchQuery(obj.Search)) {
        const formatted = this.formatSearchQuery(obj.Search);
        filter.push(formatted);
      } else
        filter.push(" contains(tolower(Name), '" + obj.Search + "')");
    }

    // append filter param to query parts
    if (filter.length > 0) {
      console.log('Filter: ', filter.join(' and '));
      parts.push(`$apply=filter(${filter.join(' and ')})`);
    }

    if ( obj.UserRole != null )
      parts.push('UserRole=' + obj.UserRole);

    const isAsc = obj.IsSortAscending ? 'Asc' : 'Desc';
    parts.push('$orderby=' + obj.OrderBy + ' ' + isAsc);
    
    parts.push('$top=' + obj.PageSize);
    parts.push('$skip=' + (obj.CurrentPage * obj.PageSize));
    parts.push('$count=true');

    console.log(parts.join('&'));
    return parts.join('&');
  }

  formatSearchQuery(search: string) {
    let formatted;
    if (search.charAt(0) === '#') {
      formatted = 'Id eq ' + search.replace('#', '');
    }
    if (search.charAt(0) === '$') {
      formatted = search.replace('$', '') // how to replace all $ in string
                        .replace(/>=/g, ' ge ')
                        .replace(/<=/g, ' le ')
                        .replace(/!=/g, ' ne ')
                        .replace(/=/g, ' eq ')
                        .replace(/>/g, ' gt ')
                        .replace(/</g, ' lt ');
    }
    return formatted;
  }

  isComplexSearchQuery(search: string) {
    if (search.charAt(0) === '$' || search.charAt(0) === '#')
      return true;
    return false;
  }

}
