const LocalStorageService = (function () {
    let _service;
    
    function _getService() {
        if (!_service) {
            _service = this;
            return _service
        }
        return _service
    }
    
    function _setAccessToken(obj) {
        localStorage.setItem("token", obj.token);
    }
    function _getAccessToken() {
        return localStorage.getItem("token");
    }
    function _clearToken() {
        localStorage.removeItem("token");
    }
    return {
        getService: _getService,
        setAccessToken: _setAccessToken,
        getAccessToken: _getAccessToken,
        clearToken: _clearToken
    }
})();
export default LocalStorageService;