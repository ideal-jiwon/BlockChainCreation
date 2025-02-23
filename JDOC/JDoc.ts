declare module "lodash" {

    /**
     * function head(array) {
          return (array && array.length) ? array[0] : undefined;
        }
     */
    function head<T>(array: T[] | null | undefined):T | undefined {
        return array && array.length ? array[0] : undefined;
    }
    /**
     *  function hasIn(object, path) {
          return object != null && hasPath(object, path, baseHasIn);
        }
     */
    function hasIn(object:Record<string, any> | null | undefined, path: string | string[]): boolean {
        return object != null && hasPath(object, path, baseHasIn);
    }
    /**
     *  function isBoolean(value) {
          return value === true || value === false ||
            (isObjectLike(value) && baseGetTag(value) == boolTag);
        }
     */
    function isBoolean(value: any): boolean {
        return value === true || value === false ||
            (isObjectLike(value) && baseGetTag(value) == boolTag); 
    }
    /**
     *  function toString(value) {
          return value == null ? '' : baseToString(value);
        }
     */
    function toString(value: any): string {
        return value === null || value === undefined ? '' : baseToString(value);
    }
    /**
     *  function split(string, separator, limit) {
          if (limit && typeof limit != 'number' && isIterateeCall(string, separator, limit)) {
            separator = limit = undefined;
          }
          limit = limit === undefined ? MAX_ARRAY_LENGTH : limit >>> 0;
          if (!limit) {
            return [];
          }
          string = toString(string);
          if (string && (
                typeof separator == 'string' ||
                (separator != null && !isRegExp(separator))
              )) {
            separator = baseToString(separator);
            if (!separator && hasUnicode(string)) {
              return castSlice(stringToArray(string), 0, limit);
            }
          }
          return string.split(separator, limit);
        }
    
     */
    function split(string: string ='', separator: RegExp | string, limit?:number ): string[] {
        if (limit && typeof limit != 'number' && isIterateeCall(string, separator, limit)) {
            separator = limit = undefined;
          }
          limit = limit === undefined ? MAX_ARRAY_LENGTH : limit >>> 0;
          if (!limit) {
            return [];
          }
          string = toString(string);
          if (string && (
                typeof separator == 'string' ||
                (separator != null && !isRegExp(separator))
              )) {
            separator = baseToString(separator);
            if (!separator && hasUnicode(string)) {
              return castSlice(stringToArray(string), 0, limit);
            }
          }
          return string.split(separator, limit);
        }
        /**
         * * @private
         * @param {Object} object The object to query.
         * @param {Array|string} path The path to check.
         * @param {Function} hasFunc The function to check properties.
         * @returns {boolean} Returns `true` if `path` exists, else `false`.
        function hasPath(object, path, hasFunc) {
          path = castPath(path, object);
    
          var index = -1,
              length = path.length,
              result = false;
    
          while (++index < length) {
            var key = toKey(path[index]);
            if (!(result = object != null && hasFunc(object, key))) {
              break;
            }
            object = object[key];
          }
          if (result || ++index != length) {
            return result;
          }
          length = object == null ? 0 : object.length;
          return !!length && isLength(length) && isIndex(key, length) &&
            (isArray(object) || isArguments(object));
        }
          */
    function hasPath(object: Record<string, any> | null | undefined,
      path: string | string[],
      hasFunc: (obj: any, key: string) => boolean
    ): boolean {
          var index = -1,
              length = path.length,
              result = false;
    
          while (++index < length) {
            var key = toKey(path[index]);
            if (!(result = object != null && hasFunc(object, key))) {
              break;
            }
            object = object[key];
          }
          if (result || ++index != length) {
            return result;
          }
          length = object == null ? 0 : object.length;
          return !!length && isLength(length) && isIndex(key, length) &&
            (isArray(object) || isArguments(object));
        }
    }
    /**
     *  * @static
         * @memberOf _
         * @since 4.0.0
         * @category Object
         * @param {Object} object The object to query.
         * @param {Array|string} path The path to check.
         * @returns {boolean} Returns `true` if `path` exists, else `false`.
         * @example
         *function hasIn(object, path) {
          return object != null && hasPath(object, path, baseHasIn);
        }
     */
    function hasIn(object:Record<string, any> | null | undefined,
                   path: string[] | string,
                ) : boolean {
                    return object != null && hasPath(object, path, baseHasIn);
                }
    /**
     * @static
         * @memberOf _
         * @since 0.1.0
         * @category Collection
         * @param {Array|Object} collection The collection to iterate over.
         * @param {Function} [predicate=_.identity] The function invoked per iteration.
         * @returns {Array} Returns the new filtered array.
         * @see _.reject
         * @example
         * function filter(collection, predicate) {
          var func = isArray(collection) ? arrayFilter : baseFilter;
          return func(collection, getIteratee(predicate, 3));
        }
     */
    function filter(collection: any[] | Record<string, any> | null | undefined,
              predicate(obj: any, key: string )=> boolean): any[]{
                var func = isArray(collection) ? arrayFilter : baseFilter;
                return func(collection, getIteratee(predicate, 3));
              } 
    
    /**
     * @static
         * @memberOf _
         * @since 0.1.0
         * @category Collection
         * @param {Array|Object} collection The collection to iterate over.
         * @param {Function} [predicate=_.identity] The function invoked per iteration.
         * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
         * @returns {boolean} Returns `true` if all elements pass the predicate check,
         *  else `false`.
         * @example
         *  function every(collection, predicate, guard) {
          var func = isArray(collection) ? arrayEvery : baseEvery;
          if (guard && isIterateeCall(collection, predicate, guard)) {
            predicate = undefined;
          }
          return func(collection, getIteratee(predicate, 3));
        }
     */
    function every(
             collection: any[]| Record<string, any>,
             predicate(obejct: any, key: string) => boolean, guard?: any): boolean{
            var func = isArray(collection) ? arrayEvery : baseEvery;
            if (guard && isIterateeCall(collection, predicate, guard)) {
            predicate = undefined;
          }
          return func(collection, getIteratee(predicate, 3));
        }
    
        /**
         *     * @static
         * @memberOf _
         * @since 0.1.0
         * @category Collection
         * @param {Array|Object} collection The collection to iterate over.
         * @param {Function} [iteratee=_.identity] The function invoked per iteration.
         * @returns {Array} Returns the new mapped array.
         * @example
         *  function map(collection, iteratee) {
          var func = isArray(collection) ? arrayMap : baseMap;
          return func(collection, getIteratee(iteratee, 3));
        }
         */
    function map(
        collection: any[] | Record<string, any>,
        iteratee(object:any, key: string)=> any) : any[] {
        var func = isArray(collection) ? arrayMap : baseMap;
        return func(collection, getIteratee(iteratee, 3));
        }