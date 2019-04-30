'use strict';

// third-party

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _SuccessIcon = require('./SuccessIcon');

var _SuccessIcon2 = _interopRequireDefault(_SuccessIcon);

var _ErrorIcon = require('./ErrorIcon');

var _ErrorIcon2 = _interopRequireDefault(_ErrorIcon);

var _InfoIcon = require('./InfoIcon');

var _InfoIcon2 = _interopRequireDefault(_InfoIcon);

var _WarningIcon = require('./WarningIcon');

var _WarningIcon2 = _interopRequireDefault(_WarningIcon);

var _CustomIcon = require('./CustomIcon');

var _CustomIcon2 = _interopRequireDefault(_CustomIcon);

var _Buttons = require('./Buttons');

var _Buttons2 = _interopRequireDefault(_Buttons);

var _Input = require('./Input');

var _Input2 = _interopRequireDefault(_Input);

var _ValidationMessage = require('./ValidationMessage');

var _ValidationMessage2 = _interopRequireDefault(_ValidationMessage);

var _Title = require('./Title');

var _Title2 = _interopRequireDefault(_Title);

var _Content = require('./Content');

var _Content2 = _interopRequireDefault(_Content);

var _SweetAlertStyles = require('../styles/SweetAlertStyles');

var _SweetAlertStyles2 = _interopRequireDefault(_SweetAlertStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// components


// styles


var defaultRegex = /^.+$/;
var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

var style = _SweetAlertStyles2.default.sweetAlert;

if (typeof window !== 'undefined') {
    if (window && window.innerWidth && window.innerWidth < 767) {
        style = (0, _objectAssign2.default)({}, style, _SweetAlertStyles2.default.sweetAlertMobile);
    }
}

var Overlay = function (_React$Component) {
    _inherits(Overlay, _React$Component);

    function Overlay() {
        _classCallCheck(this, Overlay);

        return _possibleConstructorReturn(this, (Overlay.__proto__ || Object.getPrototypeOf(Overlay)).apply(this, arguments));
    }

    _createClass(Overlay, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (this.refs.overlay) {
                this.refs.overlay.focus();
                this.refs.overlay.scrollTop = 0;
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                show = _props.show,
                onClick = _props.onClick,
                onKeyDown = _props.onKeyDown,
                children = _props.children;

            return show ? _react2.default.createElement(
                'div',
                { ref: 'overlay', style: _SweetAlertStyles2.default.overlay, onClick: onClick, tabIndex: '0', onKeyDown: onKeyDown },
                children
            ) : _react2.default.createElement(
                'div',
                { tabIndex: '0', onKeyDown: onKeyDown },
                children
            );
        }
    }]);

    return Overlay;
}(_react2.default.Component);

var SweetAlert = function (_React$Component2) {
    _inherits(SweetAlert, _React$Component2);

    function SweetAlert() {
        var _ref;

        var _temp, _this2, _ret;

        _classCallCheck(this, SweetAlert);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = SweetAlert.__proto__ || Object.getPrototypeOf(SweetAlert)).call.apply(_ref, [this].concat(args))), _this2), _this2.state = {
            type: 'default',
            focusConfirmBtn: true,
            inputValue: '',
            showValidationMessage: false,
            timer: null
        }, _this2.setStateFromProps = function (props) {
            props = props || _this2.props;
            var type = _this2.getTypeFromProps(props);
            _this2.setState({
                type: type,
                focusConfirmBtn: props.focusConfirmBtn && type !== 'input'
            });
        }, _this2.getTypeFromProps = function (props) {
            if (props.type) return props.type;
            if (props.info) return 'info';
            if (props.success) return 'success';
            if (props.warning) return 'warning';
            if (props.danger || props.error) return 'danger';
            if (props.input) return 'input';
            if (props.custom) return 'custom';
            return _this2.state.type;
        }, _this2.unsupportedProp = function (oldProp, message) {
            try {
                console.warn('react-bootstrap-sweetalert: Unsupported prop \'' + oldProp + '\'. Please ' + message);
            } catch (e) {}
        }, _this2.getIcon = function () {
            switch (_this2.state.type) {
                case 'danger':
                case 'error':
                    return _react2.default.createElement(_ErrorIcon2.default, null);
                case 'warning':
                    return _react2.default.createElement(_WarningIcon2.default, null);
                case 'info':
                    return _react2.default.createElement(_InfoIcon2.default, null);
                case 'success':
                    return _react2.default.createElement(_SuccessIcon2.default, null);
                case 'custom':
                    if (_this2.props.customIcon) {
                        if (typeof _this2.props.customIcon == 'string') {
                            return _react2.default.createElement(_CustomIcon2.default, { iconUrl: _this2.props.customIcon });
                        } else {
                            return _this2.props.customIcon;
                        }
                    }
            }
        }, _this2.onChangeInput = function (e) {
            _this2.setState({
                inputValue: e.target.value,
                showValidationMessage: false
            });
        }, _this2.isValidInput = function () {
            if (!_this2.props.required) {
                return true;
            }
            var regex = _this2.props.validationRegex || (_this2.props.inputType === 'email' ? emailRegex : defaultRegex);
            return regex.test(_this2.state.inputValue);
        }, _this2.onConfirm = function () {
            if (_this2.state.type === 'input') {
                if (_this2.isValidInput()) {
                    _this2.props.onConfirm(_this2.state.inputValue);
                } else {
                    _this2.setState({
                        showValidationMessage: true
                    });
                }
            } else {
                _this2.props.onConfirm();
            }
        }, _this2.onInputKeyDown = function (e) {
            if (e.keyCode == 13) {
                if (_this2.props.onConfirm) {
                    _this2.onConfirm();
                    e.stopPropagation();
                }
            }
        }, _this2.onKeyDown = function (e) {
            // if (e.keyCode == 13) {
            //     if (this.props.onConfirm) {
            //         this.onConfirm();
            //         e.stopPropagation();
            //     }
            // }
            if (e.keyCode == 27) {
                if (_this2.props.allowEscape && _this2.props.onCancel) {
                    _this2.props.onCancel();
                    e.stopPropagation();
                }
            }
        }, _this2.onClickInside = function (e) {
            e.stopPropagation();
        }, _this2.onClickOutside = function () {
            if (_this2.props.closeOnClickOutside && _this2.props.onCancel) {
                _this2.props.onCancel();
            }
        }, _temp), _possibleConstructorReturn(_this2, _ret);
    }

    _createClass(SweetAlert, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            if (this.props.inputPlaceHolder) {
                this.unsupportedProp('inputPlaceHolder', 'use props.placeholder');
            }
            if (this.props.inputValidationMsg) {
                this.unsupportedProp('inputValidationMsg', 'use props.validationMsg');
            }
            if (this.props.content) {
                this.unsupportedProp('content', 'use props.children <SweetAlert>your content</SweetAlert>');
            }
            if (this.props.defaultValue != null) {
                this.setState({
                    inputValue: this.props.defaultValue
                });
            }

            this.setStateFromProps();

            this.props.beforeMount();
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            document.body.classList.add('sweetalert-overflow-hidden');
            this.props.afterMount();
            this.handleTimeout();
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (this.getTypeFromProps(this.props) !== this.getTypeFromProps(nextProps)) {
                this.setStateFromProps(nextProps);
                this.handleTimeout(nextProps);
            } else if (this.props.timeout !== nextProps.timeout) {
                this.handleTimeout(nextProps);
            }
        }
    }, {
        key: 'componentWillUpdate',
        value: function componentWillUpdate(nextProps, nextState) {
            this.props.beforeUpdate(nextProps, nextState);
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            this.props.afterUpdate(prevProps, prevState);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            document.body.classList.remove('sweetalert-overflow-hidden');
            this.props.beforeUnmount();
        }
    }, {
        key: 'handleTimeout',
        value: function handleTimeout(props) {
            props = props || this.props;

            if (this.state.timer) {
                clearTimeout(this.state.timer);
            }

            if (props.timeout && props.timeout > 0) {
                var timer = setTimeout(function () {
                    return props.onConfirm();
                }, props.timeout);

                this.setState({ timer: timer });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            if (!this.props.show) {
                return false;
            }
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement('style', { type: 'text/css', dangerouslySetInnerHTML: { __html: '\n                    body.sweetalert-overflow-hidden {\n                        overflow: hidden;\n                    }\n                ' } }),
                _react2.default.createElement(
                    'style',
                    { type: 'text/css', scoped: true },
                    '@-webkit-keyframes showSweetAlert {\n                      0% {\n                        transform: scale(0.7);\n                        -webkit-transform: scale(0.7);\n                      }\n                      45% {\n                        transform: scale(1.05);\n                        -webkit-transform: scale(1.05);\n                      }\n                      80% {\n                        transform: scale(0.95);\n                        -webkit-tranform: scale(0.95);\n                      }\n                      100% {\n                        transform: scale(1);\n                        -webkit-transform: scale(1);\n                      }\n                    }\n                    @keyframes showSweetAlert {\n                      0% {\n                        transform: scale(0.7);\n                        -webkit-transform: scale(0.7);\n                      }\n                      45% {\n                        transform: scale(1.05);\n                        -webkit-transform: scale(1.05);\n                      }\n                      80% {\n                        transform: scale(0.95);\n                        -webkit-tranform: scale(0.95);\n                      }\n                      100% {\n                        transform: scale(1);\n                        -webkit-transform: scale(1);\n                      }\n                    }\n                    @-webkit-keyframes hideSweetAlert {\n                      0% {\n                        transform: scale(1);\n                        -webkit-transform: scale(1);\n                      }\n                      100% {\n                        transform: scale(0.5);\n                        -webkit-transform: scale(0.5);\n                      }\n                    }\n                    @keyframes hideSweetAlert {\n                      0% {\n                        transform: scale(1);\n                        -webkit-transform: scale(1);\n                      }\n                      100% {\n                        transform: scale(0.5);\n                        -webkit-transform: scale(0.5);\n                      }\n                    }\n                    @-webkit-keyframes animateSuccessTip {\n                      0% {\n                        width: 0;\n                        left: 1px;\n                        top: 19px;\n                      }\n                      54% {\n                        width: 0;\n                        left: 1px;\n                        top: 19px;\n                      }\n                      70% {\n                        width: 50px;\n                        left: -8px;\n                        top: 37px;\n                      }\n                      84% {\n                        width: 17px;\n                        left: 21px;\n                        top: 48px;\n                      }\n                      100% {\n                        width: 25px;\n                        left: 14px;\n                        top: 45px;\n                      }\n                    }\n                    @keyframes animateSuccessTip {\n                      0% {\n                        width: 0;\n                        left: 1px;\n                        top: 19px;\n                      }\n                      54% {\n                        width: 0;\n                        left: 1px;\n                        top: 19px;\n                      }\n                      70% {\n                        width: 50px;\n                        left: -8px;\n                        top: 37px;\n                      }\n                      84% {\n                        width: 17px;\n                        left: 21px;\n                        top: 48px;\n                      }\n                      100% {\n                        width: 25px;\n                        left: 14px;\n                        top: 45px;\n                      }\n                    }\n                    @-webkit-keyframes animateSuccessLong {\n                      0% {\n                        width: 0;\n                        right: 46px;\n                        top: 54px;\n                      }\n                      65% {\n                        width: 0;\n                        right: 46px;\n                        top: 54px;\n                      }\n                      84% {\n                        width: 55px;\n                        right: 0px;\n                        top: 35px;\n                      }\n                      100% {\n                        width: 47px;\n                        right: 8px;\n                        top: 38px;\n                      }\n                    }\n                    @keyframes animateSuccessLong {\n                      0% {\n                        width: 0;\n                        right: 46px;\n                        top: 54px;\n                      }\n                      65% {\n                        width: 0;\n                        right: 46px;\n                        top: 54px;\n                      }\n                      84% {\n                        width: 55px;\n                        right: 0px;\n                        top: 35px;\n                      }\n                      100% {\n                        width: 47px;\n                        right: 8px;\n                        top: 38px;\n                      }\n                    }\n                    @-webkit-keyframes rotatePlaceholder {\n                      0% {\n                        transform: rotate(-45deg);\n                        -webkit-transform: rotate(-45deg);\n                      }\n                      5% {\n                        transform: rotate(-45deg);\n                        -webkit-transform: rotate(-45deg);\n                      }\n                      12% {\n                        transform: rotate(-405deg);\n                        -webkit-transform: rotate(-405deg);\n                      }\n                      100% {\n                        transform: rotate(-405deg);\n                        -webkit-transform: rotate(-405deg);\n                      }\n                    }\n                    @keyframes rotatePlaceholder {\n                      0% {\n                        transform: rotate(-45deg);\n                        -webkit-transform: rotate(-45deg);\n                      }\n                      5% {\n                        transform: rotate(-45deg);\n                        -webkit-transform: rotate(-45deg);\n                      }\n                      12% {\n                        transform: rotate(-405deg);\n                        -webkit-transform: rotate(-405deg);\n                      }\n                      100% {\n                        transform: rotate(-405deg);\n                        -webkit-transform: rotate(-405deg);\n                      }\n                    }\n                    @-webkit-keyframes animateErrorIcon {\n                      0% {\n                        transform: rotateX(100deg);\n                        -webkit-transform: rotateX(100deg);\n                        opacity: 0;\n                      }\n                      100% {\n                        transform: rotateX(0deg);\n                        -webkit-transform: rotateX(0deg);\n                        opacity: 1;\n                      }\n                    }\n                    @keyframes animateErrorIcon {\n                      0% {\n                        transform: rotateX(100deg);\n                        -webkit-transform: rotateX(100deg);\n                        opacity: 0;\n                      }\n                      100% {\n                        transform: rotateX(0deg);\n                        -webkit-transform: rotateX(0deg);\n                        opacity: 1;\n                      }\n                    }\n                    @-webkit-keyframes animateXMark {\n                      0% {\n                        transform: scale(0.4);\n                        -webkit-transform: scale(0.4);\n                        margin-top: 26px;\n                        opacity: 0;\n                      }\n                      50% {\n                        transform: scale(0.4);\n                        -webkit-transform: scale(0.4);\n                        margin-top: 26px;\n                        opacity: 0;\n                      }\n                      80% {\n                        transform: scale(1.15);\n                        -webkit-transform: scale(1.15);\n                        margin-top: -6px;\n                      }\n                      100% {\n                        transform: scale(1);\n                        -webkit-transform: scale(1);\n                        margin-top: 0;\n                        opacity: 1;\n                      }\n                    }\n                    @keyframes animateXMark {\n                      0% {\n                        transform: scale(0.4);\n                        -webkit-transform: scale(0.4);\n                        margin-top: 26px;\n                        opacity: 0;\n                      }\n                      50% {\n                        transform: scale(0.4);\n                        -webkit-transform: scale(0.4);\n                        margin-top: 26px;\n                        opacity: 0;\n                      }\n                      80% {\n                        transform: scale(1.15);\n                        -webkit-transform: scale(1.15);\n                        margin-top: -6px;\n                      }\n                      100% {\n                        transform: scale(1);\n                        -webkit-transform: scale(1);\n                        margin-top: 0;\n                        opacity: 1;\n                      }\n                    }\n                    @-webkit-keyframes pulseWarning {\n                      0% {\n                        border-color: #F8D486;\n                      }\n                      100% {\n                        border-color: #F8BB86;\n                      }\n                    }\n                    @keyframes pulseWarning {\n                      0% {\n                        border-color: #F8D486;\n                      }\n                      100% {\n                        border-color: #F8BB86;\n                      }\n                    }\n                    @-webkit-keyframes pulseWarningIns {\n                      0% {\n                        background-color: #F8D486;\n                      }\n                      100% {\n                        background-color: #F8BB86;\n                      }\n                    }\n                    @keyframes pulseWarningIns {\n                      0% {\n                        background-color: #F8D486;\n                      }\n                      100% {\n                        background-color: #F8BB86;\n                      }\n                    }'
                ),
                _react2.default.createElement(
                    Overlay,
                    { show: !this.props.hideOverlay, onClick: this.onClickOutside, onKeyDown: this.onKeyDown },
                    _react2.default.createElement(
                        'div',
                        {
                            style: (0, _objectAssign2.default)({}, style, this.props.style),
                            ref: 'container',
                            className: 'sweet-alert ' + this.props.customClass,
                            onClick: this.onClickInside
                        },
                        this.getIcon(),
                        _react2.default.createElement(
                            _Title2.default,
                            null,
                            this.props.title
                        ),
                        _react2.default.createElement(
                            _Content2.default,
                            null,
                            this.props.children
                        ),
                        this.state.type === 'input' && _react2.default.createElement(_Input2.default, _extends({}, this.props, this.state, {
                            type: this.state.type,
                            onInputKeyDown: this.onInputKeyDown,
                            onChangeInput: this.onChangeInput
                        })),
                        this.state.showValidationMessage && _react2.default.createElement(_ValidationMessage2.default, this.props),
                        _react2.default.createElement(_Buttons2.default, _extends({}, this.props, {
                            type: this.state.type,
                            onConfirm: this.onConfirm,
                            focusConfirmBtn: this.state.focusConfirmBtn
                        }))
                    )
                )
            );
        }
    }]);

    return SweetAlert;
}(_react2.default.Component);

SweetAlert.propTypes = {
    type: _propTypes2.default.oneOf(['default', 'info', 'success', 'warning', 'danger', 'error', 'input', 'custom']),
    title: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.string]).isRequired,
    onCancel: _propTypes2.default.func,
    onConfirm: _propTypes2.default.func.isRequired,
    confirmBtnText: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.string]),
    confirmBtnBsStyle: _propTypes2.default.oneOf(['default', 'primary', 'link', 'info', 'success', 'warning', 'danger']),
    confirmBtnCssClass: _propTypes2.default.string,
    confirmBtnStyle: _propTypes2.default.object,
    cancelBtnText: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.string]),
    cancelBtnBsStyle: _propTypes2.default.oneOf(['default', 'primary', 'link', 'info', 'success', 'warning', 'danger']),
    cancelBtnCssClass: _propTypes2.default.string,
    cancelBtnStyle: _propTypes2.default.object,
    btnSize: _propTypes2.default.string,
    customIcon: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.string]),
    show: _propTypes2.default.bool,
    required: _propTypes2.default.bool,
    placeholder: _propTypes2.default.string,
    validationMsg: _propTypes2.default.string,
    validationRegex: _propTypes2.default.object,
    defaultValue: _propTypes2.default.string,
    inputType: _propTypes2.default.string,
    style: _propTypes2.default.object,
    customClass: _propTypes2.default.string,
    showConfirm: _propTypes2.default.bool,
    showCancel: _propTypes2.default.bool,
    allowEscape: _propTypes2.default.bool,
    closeOnClickOutside: _propTypes2.default.bool,
    hideOverlay: _propTypes2.default.bool,
    disabled: _propTypes2.default.bool,
    focusConfirmBtn: _propTypes2.default.bool,
    beforeMount: _propTypes2.default.func,
    afterMount: _propTypes2.default.func,
    beforeUpdate: _propTypes2.default.func,
    afterUpdate: _propTypes2.default.func,
    beforeUnmount: _propTypes2.default.func,
    timeout: _propTypes2.default.number
};
SweetAlert.defaultProps = {
    allowEscape: true,
    closeOnClickOutside: true,
    validationMsg: null,
    validationRegex: null,
    inputType: 'text',
    customClass: '',
    hideOverlay: false,
    show: true,
    required: true,
    disabled: false,
    focusConfirmBtn: true,
    beforeMount: function beforeMount() {},
    afterMount: function afterMount() {},
    beforeUpdate: function beforeUpdate() {},
    afterUpdate: function afterUpdate() {},
    beforeUnmount: function beforeUnmount() {},
    timeout: 0
};
SweetAlert.SuccessIcon = _SuccessIcon2.default;
SweetAlert.ErrorIcon = _ErrorIcon2.default;
SweetAlert.InfoIcon = _InfoIcon2.default;
SweetAlert.WarningIcon = _WarningIcon2.default;
SweetAlert.CustomIcon = _CustomIcon2.default;
SweetAlert.Buttons = _Buttons2.default;
SweetAlert.Input = _Input2.default;
SweetAlert.ValidationMessage = _ValidationMessage2.default;
SweetAlert.Title = _Title2.default;
SweetAlert.Content = _Content2.default;
exports.default = SweetAlert;