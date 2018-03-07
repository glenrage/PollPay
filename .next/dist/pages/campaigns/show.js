'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _Layout = require('../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _campaign = require('../../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _ContributeForm = require('../../components/ContributeForm');

var _ContributeForm2 = _interopRequireDefault(_ContributeForm);

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/galangpham/CodeFellows/PollPay/pages/campaigns/show.js?entry';


var CampaignShow = function (_Component) {
  (0, _inherits3.default)(CampaignShow, _Component);

  function CampaignShow() {
    (0, _classCallCheck3.default)(this, CampaignShow);

    return (0, _possibleConstructorReturn3.default)(this, (CampaignShow.__proto__ || (0, _getPrototypeOf2.default)(CampaignShow)).apply(this, arguments));
  }

  (0, _createClass3.default)(CampaignShow, [{
    key: 'renderCards',
    value: function renderCards() {
      var _props = this.props,
          balance = _props.balance,
          manager = _props.manager,
          minimumContribution = _props.minimumContribution,
          requestsCount = _props.requestsCount,
          approversCount = _props.approversCount;

      var items = [{
        header: manager,
        meta: 'Address of Manager',
        description: 'The Manager created this Campaign and can create requests to withdraw funds',
        style: { overflowWrap: 'break-word' }
      }, {
        header: minimumContribution,
        meta: 'Minimum Contribution (Wei)',
        description: 'You must contribute this much wei to be able to approve Spending Requests'
      }, {
        header: requestsCount,
        meta: 'Number of Spending Requests',
        description: 'A Spending Request tries to withdraw money from the contract. Requests must be approved by approvers'
      }, {
        header: approversCount,
        meta: 'Number of Approvers',
        description: 'Number of people who have already donated, and are allowed to approve spending requests'
      }, {
        header: _web2.default.utils.fromWei(balance, 'ether'),
        meta: 'Budget Balance (Ether)',
        description: 'The balance is how much money this budget has left to spend'
      }];

      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, 'Budget View'), _react2.default.createElement(_semanticUiReact.Grid, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, this.renderCards()), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6, __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, _react2.default.createElement(_ContributeForm2.default, { address: this.props.address, __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }))), _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.address + '/requests', __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, 'View Spending Requests')))))));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
        var campaign, summary;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                campaign = (0, _campaign2.default)(props.query.address);
                _context.next = 3;
                return campaign.methods.getSummary().call();

              case 3:
                summary = _context.sent;
                return _context.abrupt('return', {
                  address: props.query.address,
                  minimumContribution: summary[0],
                  balance: summary[1],
                  requestsCount: summary[2],
                  approversCount: summary[3],
                  manager: summary[4]
                });

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return CampaignShow;
}(_react.Component);

exports.default = CampaignShow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9zaG93LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQ2FyZCIsIkdyaWQiLCJCdXR0b24iLCJMYXlvdXQiLCJDYW1wYWlnbiIsIkNvbnRyaWJ1dGVGb3JtIiwid2ViMyIsIkxpbmsiLCJDYW1wYWlnblNob3ciLCJwcm9wcyIsImJhbGFuY2UiLCJtYW5hZ2VyIiwibWluaW11bUNvbnRyaWJ1dGlvbiIsInJlcXVlc3RzQ291bnQiLCJhcHByb3ZlcnNDb3VudCIsIml0ZW1zIiwiaGVhZGVyIiwibWV0YSIsImRlc2NyaXB0aW9uIiwic3R5bGUiLCJvdmVyZmxvd1dyYXAiLCJ1dGlscyIsImZyb21XZWkiLCJyZW5kZXJDYXJkcyIsImFkZHJlc3MiLCJjYW1wYWlnbiIsInF1ZXJ5IiwibWV0aG9kcyIsImdldFN1bW1hcnkiLCJjYWxsIiwic3VtbWFyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQU0sQUFBTTs7QUFDckIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBYzs7OztBQUNyQixBQUFPLEFBQW9COzs7O0FBQzNCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFTLEFBQVk7Ozs7Ozs7SSxBQUVmOzs7Ozs7Ozs7OztrQ0FnQlU7bUJBT1IsS0FQUSxBQU9IO1VBUEcsQUFFVixpQkFGVSxBQUVWO1VBRlUsQUFHVixpQkFIVSxBQUdWO1VBSFUsQUFJViw2QkFKVSxBQUlWO1VBSlUsQUFLVix1QkFMVSxBQUtWO1VBTFUsQUFNVix3QkFOVSxBQU1WLEFBR0Y7O1VBQU07Z0JBQ0osQUFDVSxBQUNSO2NBRkYsQUFFUSxBQUNOO3FCQUhGLEFBSUksQUFDRjtlQUFPLEVBQUUsY0FOQyxBQUNaLEFBS1MsQUFBZ0I7QUFMekIsQUFDRSxPQUZVO2dCQVFaLEFBQ1UsQUFDUjtjQUZGLEFBRVEsQUFDTjtxQkFYVSxBQVFaLEFBSUk7QUFKSixBQUNFO2dCQUtGLEFBQ1UsQUFDUjtjQUZGLEFBRVEsQUFDTjtxQkFqQlUsQUFjWixBQUlJO0FBSkosQUFDRTtnQkFLRixBQUNVLEFBQ1I7Y0FGRixBQUVRLEFBQ047cUJBdkJVLEFBb0JaLEFBSUk7QUFKSixBQUNFO2dCQU1RLGNBQUEsQUFBSyxNQUFMLEFBQVcsUUFBWCxBQUFtQixTQUQ3QixBQUNVLEFBQTRCLEFBQ3BDO2NBRkYsQUFFUSxBQUNOO3FCQTdCSixBQUFjLEFBMEJaLEFBSUksQUFJTjtBQVJFLEFBQ0U7OzJDQU9HLEFBQUMsc0JBQUQsQUFBTSxTQUFNLE9BQVosQUFBbUI7b0JBQW5CO3NCQUFQLEFBQU8sQUFDUjtBQURRO09BQUE7Ozs7NkJBR0EsQUFDUDs2QkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQSxnQ0FBQSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRyxjQUFELHNCQUFBLEFBQU07O29CQUFOO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNHLGNBQUQsc0JBQUEsQUFBTSxVQUFPLE9BQWIsQUFBb0I7b0JBQXBCO3NCQUFBLEFBQXlCO0FBQXpCO2NBREYsQUFDRSxBQUF5QixBQUFLLEFBRTlCLGdDQUFDLGNBQUQsc0JBQUEsQUFBTSxVQUFPLE9BQWIsQUFBb0I7b0JBQXBCO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxBQUFDLDBDQUFlLFNBQVMsS0FBQSxBQUFLLE1BQTlCLEFBQW9DO29CQUFwQztzQkFMTixBQUNFLEFBR0UsQUFDRSxBQUlKO0FBSkk7NEJBSUgsY0FBRCxzQkFBQSxBQUFNOztvQkFBTjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRyxjQUFELHNCQUFBLEFBQU07O29CQUFOO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLEFBQUMsOEJBQUssdUJBQXFCLEtBQUEsQUFBSyxNQUExQixBQUFnQyxVQUF0QztvQkFBQTtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsQUFBQyx5Q0FBTyxTQUFSO29CQUFBO3NCQUFBO0FBQUE7U0FoQmQsQUFDRSxBQUVFLEFBU0UsQUFDRSxBQUNFLEFBQ0UsQUFDRSxBQVFmOzs7OzsyR0F0RjRCLEE7Ozs7O21CQUNyQjtBLDJCQUFXLHdCQUFTLE1BQUEsQUFBTSxNQUFmLEFBQXFCLEE7O3VCQUVoQixTQUFBLEFBQVMsUUFBVCxBQUFpQixhQUFqQixBLEFBQThCOzttQkFBOUM7QTs7MkJBR0ssTUFBQSxBQUFNLE1BRFYsQUFDZ0IsQUFDckI7dUNBQXFCLFFBRmhCLEFBRWdCLEFBQVEsQUFDN0I7MkJBQVMsUUFISixBQUdJLEFBQVEsQUFDakI7aUNBQWUsUUFKVixBQUlVLEFBQVEsQUFDdkI7a0NBQWdCLFFBTFgsQUFLVyxBQUFRLEFBQ3hCOzJCQUFTLFFBQUEsQSxBQU5KLEFBTVk7QUFOWixBQUNMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUHFCLEEsQUEwRjNCOztrQkFBQSxBQUFlIiwiZmlsZSI6InNob3cuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2dhbGFuZ3BoYW0vQ29kZUZlbGxvd3MvUG9sbFBheSJ9