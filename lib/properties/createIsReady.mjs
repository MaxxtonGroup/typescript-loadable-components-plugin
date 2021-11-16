/*!
 * Copyright 2019 acrazing <joking.young@gmail.com>. All rights reserved.
 * @since 2019-11-02 00:10:00
 */
import * as ts from 'typescript';

/**
 * (typeof __webpack_modules__ !== 'undefined' &&
 * Boolean(__webpack_modules__[this.resolve(props)])
 )
 */
var IS_READY_ORIGINAL_CHECK = ts.factory.createBinaryExpression(
    ts.factory.createBinaryExpression(
      ts.factory.createTypeOfExpression( ts.factory.createIdentifier( "__webpack_modules__" ) ),
      ts.SyntaxKind.ExclamationEqualsEqualsToken,
      ts.factory.createStringLiteral( "undefined" )
    ),
    ts.SyntaxKind.AmpersandAmpersandToken,
    ts.factory.createCallExpression( ts.factory.createIdentifier( "Boolean" ), void 0, [
      ts.factory.createElementAccessExpression(
        ts.factory.createIdentifier( "__webpack_modules__" ),
        ts.factory.createCallExpression( ts.factory.createPropertyAccessExpression( ts.factory.createThis(), ts.factory.createIdentifier( "resolve" ) ), void 0, [
          ts.factory.createIdentifier( "props" ),
        ] )
      ),
    ] )
  )
;

var RETURN_TRUE =  ts.factory.createReturnStatement(ts.factory.createBinaryExpression(ts.factory.createStringLiteral("true"), ts.SyntaxKind.EqualsEqualsToken, ts.factory.createStringLiteral("true") ));
var RETURN_FALSE =  ts.factory.createReturnStatement(ts.factory.createBinaryExpression(ts.factory.createStringLiteral("true"), ts.SyntaxKind.ExclamationEqualsEqualsToken, ts.factory.createStringLiteral("true") ));

var EXECUTE_REQUIRE_SYNC = ts.factory.createCallExpression( ts.factory.createPropertyAccessExpression( ts.factory.createThis(), ts.factory.createIdentifier( "requireSync" ) ), void 0, [
  ts.factory.createIdentifier( "props" ),
] );

var TRY_BLOCK = ts.factory.createTryStatement(
  ts.factory.createBlock( [EXECUTE_REQUIRE_SYNC, RETURN_TRUE]),
  ts.factory.createCatchClause(undefined, ts.factory.createBlock( [RETURN_FALSE]))
  , undefined);

/**
 * if(IS_READY_ORIGINAL_CHECK){
 *   requireSync(....)
 * }
 * else{
 *   return false
 * }
 */
var IS_READY_AND_REQUIRE_SYNC_WORKS_REQUEST_BODY = ts.factory.createIfStatement(
  IS_READY_ORIGINAL_CHECK,
  TRY_BLOCK,
);


var IS_READY_PROPERTY = ts.factory.createMethodDeclaration(
  void 0,
  void 0,
  void 0,
  "isReady",
  void 0,
  void 0,
  [ts.factory.createParameterDeclaration( void 0, void 0, void 0, "props" )],
  void 0,
  ts.factory.createBlock( [IS_READY_AND_REQUIRE_SYNC_WORKS_REQUEST_BODY, RETURN_FALSE] )
);




export function createIsReady() {
    return IS_READY_PROPERTY;
}
//# sourceMappingURL=createIsReady.js.map
