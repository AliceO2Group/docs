var HTTPParser_8h =
[
    [ "o2::framework::WebSocketConstants", "d7/d5f/structo2_1_1framework_1_1WebSocketConstants.html", null ],
    [ "o2::framework::WebSocketHandler", "d4/d6e/structo2_1_1framework_1_1WebSocketHandler.html", "d4/d6e/structo2_1_1framework_1_1WebSocketHandler" ],
    [ "o2::framework::HTTPParser", "d8/d91/structo2_1_1framework_1_1HTTPParser.html", "d8/d91/structo2_1_1framework_1_1HTTPParser" ],
    [ "o2::framework::HTTPParserHelpers", "d6/dd3/structo2_1_1framework_1_1HTTPParserHelpers.html", null ],
    [ "HTTPState", "dd/dc3/HTTPParser_8h.html#a1a4f7ef1d34b8cf7006c90fe129d569c", [
      [ "IN_START", "dd/dc3/HTTPParser_8h.html#a1a4f7ef1d34b8cf7006c90fe129d569caf70b7d7669ceb7a4de077ed6ec36fde2", null ],
      [ "IN_START_REPLY", "dd/dc3/HTTPParser_8h.html#a1a4f7ef1d34b8cf7006c90fe129d569ca415bca433ce616d18210ac3fe29d7df9", null ],
      [ "BEGIN_REPLY_VERSION", "dd/dc3/HTTPParser_8h.html#a1a4f7ef1d34b8cf7006c90fe129d569ca05c0f39c15e893d7caa1ccf589254efb", null ],
      [ "END_REPLY_VERSION", "dd/dc3/HTTPParser_8h.html#a1a4f7ef1d34b8cf7006c90fe129d569ca5165da44b8470281c72e1340e77626fd", null ],
      [ "BEGIN_REPLY_CODE", "dd/dc3/HTTPParser_8h.html#a1a4f7ef1d34b8cf7006c90fe129d569ca75075764a6dc6edf87afd9038a7ae9e7", null ],
      [ "END_REPLY_CODE", "dd/dc3/HTTPParser_8h.html#a1a4f7ef1d34b8cf7006c90fe129d569caac7b6996662156625e15def500556a0a", null ],
      [ "BEGIN_REPLY_MESSAGE", "dd/dc3/HTTPParser_8h.html#a1a4f7ef1d34b8cf7006c90fe129d569cac148236ca3063ea3a05b6dbb8315e314", null ],
      [ "END_REPLY_MESSAGE", "dd/dc3/HTTPParser_8h.html#a1a4f7ef1d34b8cf7006c90fe129d569ca4be5e67ac60b213f046dfde16e65554e", null ],
      [ "BEGIN_METHOD", "dd/dc3/HTTPParser_8h.html#a1a4f7ef1d34b8cf7006c90fe129d569ca918b425c351c1bcf6b86da1ea091a2a5", null ],
      [ "END_METHOD", "dd/dc3/HTTPParser_8h.html#a1a4f7ef1d34b8cf7006c90fe129d569ca057d58126fdee8e838603b2d36014374", null ],
      [ "BEGIN_TARGET", "dd/dc3/HTTPParser_8h.html#a1a4f7ef1d34b8cf7006c90fe129d569ca3244170e9d71ba294e61fcd29b3eb2db", null ],
      [ "END_TARGET", "dd/dc3/HTTPParser_8h.html#a1a4f7ef1d34b8cf7006c90fe129d569ca0db531a21e420c147a30d6a604ac3693", null ],
      [ "BEGIN_VERSION", "dd/dc3/HTTPParser_8h.html#a1a4f7ef1d34b8cf7006c90fe129d569ca2824333ad670c3ee146ccbe63f97eac9", null ],
      [ "END_VERSION", "dd/dc3/HTTPParser_8h.html#a1a4f7ef1d34b8cf7006c90fe129d569ca2f3eb76014314b047b477ee542cb0b1f", null ],
      [ "BEGIN_HEADERS", "dd/dc3/HTTPParser_8h.html#a1a4f7ef1d34b8cf7006c90fe129d569caa5ab53f1853055ffd30c0cf7d542bcc2", null ],
      [ "BEGIN_HEADER", "dd/dc3/HTTPParser_8h.html#a1a4f7ef1d34b8cf7006c90fe129d569ca04e8286be4505b419b29ee1522cb5594", null ],
      [ "BEGIN_HEADER_KEY", "dd/dc3/HTTPParser_8h.html#a1a4f7ef1d34b8cf7006c90fe129d569ca917c741d0ca16cdd60d950daf5650f99", null ],
      [ "END_HEADER_KEY", "dd/dc3/HTTPParser_8h.html#a1a4f7ef1d34b8cf7006c90fe129d569ca2496db90566cc66e585517dfbd0e96d3", null ],
      [ "BEGIN_HEADER_VALUE", "dd/dc3/HTTPParser_8h.html#a1a4f7ef1d34b8cf7006c90fe129d569cad8be301b6bd1b4ebf0c520f83334899a", null ],
      [ "END_HEADER_VALUE", "dd/dc3/HTTPParser_8h.html#a1a4f7ef1d34b8cf7006c90fe129d569cad74b21599bce529437d83b90a9e992f0", null ],
      [ "END_HEADER", "dd/dc3/HTTPParser_8h.html#a1a4f7ef1d34b8cf7006c90fe129d569caf6fbecab79f50d1b181d6d22076a1c04", null ],
      [ "END_HEADERS", "dd/dc3/HTTPParser_8h.html#a1a4f7ef1d34b8cf7006c90fe129d569caf2eb9a4653d7e1f0a2722e24b6045ae6", null ],
      [ "BEGIN_BODY", "dd/dc3/HTTPParser_8h.html#a1a4f7ef1d34b8cf7006c90fe129d569ca1b4c00f5a0876e53de2cc47da1e35783", null ],
      [ "IN_DONE", "dd/dc3/HTTPParser_8h.html#a1a4f7ef1d34b8cf7006c90fe129d569ca3aede11677dddf8546fc16aa667e490e", null ],
      [ "IN_ERROR", "dd/dc3/HTTPParser_8h.html#a1a4f7ef1d34b8cf7006c90fe129d569ca1c3586a95e0f3c88b34cab3fa6e66dda", null ],
      [ "IN_SKIP_CHARS", "dd/dc3/HTTPParser_8h.html#a1a4f7ef1d34b8cf7006c90fe129d569ca2518be2fc4e1c28f71a00e5e72fb5345", null ],
      [ "IN_CAPTURE_DELIMITERS", "dd/dc3/HTTPParser_8h.html#a1a4f7ef1d34b8cf7006c90fe129d569ca4f5127655cc0a36a8fcab7153f75a2fc", null ],
      [ "IN_CAPTURE_SEPARATOR", "dd/dc3/HTTPParser_8h.html#a1a4f7ef1d34b8cf7006c90fe129d569ca0803aa84795bc04e7118302e19a797ef", null ],
      [ "IN_SEPARATOR", "dd/dc3/HTTPParser_8h.html#a1a4f7ef1d34b8cf7006c90fe129d569ca0723ec90cf02c71a3879b3b000e28030", null ],
      [ "IN_CHUNKED", "dd/dc3/HTTPParser_8h.html#a1a4f7ef1d34b8cf7006c90fe129d569ca17d961b1a185758f1e3b7d743136ee9a", null ]
    ] ],
    [ "WebSocketFrameKind", "dd/dc3/HTTPParser_8h.html#adf59244cedac514bab59f5a7db38700b", [
      [ "Tiny", "dd/dc3/HTTPParser_8h.html#adf59244cedac514bab59f5a7db38700ba383c05bda6f030a44990d354b24f3338", null ],
      [ "Short", "dd/dc3/HTTPParser_8h.html#adf59244cedac514bab59f5a7db38700ba30bb747c98bccdd11b3f89e644c4d0ad", null ],
      [ "Huge", "dd/dc3/HTTPParser_8h.html#adf59244cedac514bab59f5a7db38700baa2ad65f28a717b0fd2be860a0d8e5c3e", null ]
    ] ],
    [ "WebSocketOpCode", "dd/dc3/HTTPParser_8h.html#a5f591f40d1f0a581b9ed5d90298eee88", [
      [ "Continuation", "dd/dc3/HTTPParser_8h.html#a5f591f40d1f0a581b9ed5d90298eee88af11580a0250ef12842e64f487810cc70", null ],
      [ "Text", "dd/dc3/HTTPParser_8h.html#a5f591f40d1f0a581b9ed5d90298eee88a9dffbf69ffba8bc38bc4e01abf4b1675", null ],
      [ "Binary", "dd/dc3/HTTPParser_8h.html#a5f591f40d1f0a581b9ed5d90298eee88a6ce976e8f061b2b5cfe4d0c50c3405dd", null ],
      [ "Close", "dd/dc3/HTTPParser_8h.html#a5f591f40d1f0a581b9ed5d90298eee88ad3d2e617335f08df83599665eef8a418", null ],
      [ "Ping", "dd/dc3/HTTPParser_8h.html#a5f591f40d1f0a581b9ed5d90298eee88ab85815d04cec053ce6deb8021f2df1b8", null ],
      [ "Pong", "dd/dc3/HTTPParser_8h.html#a5f591f40d1f0a581b9ed5d90298eee88a4d94412495a32342e1b8c78f7960f2bc", null ]
    ] ],
    [ "__attribute__", "dd/dc3/HTTPParser_8h.html#a11e87dc2ed24bcf133cfa84b1d2f567b", null ],
    [ "decode_websocket", "dd/dc3/HTTPParser_8h.html#a8e5a140e64f174e8e44287a10befa145", null ],
    [ "encode_websocket_frames", "dd/dc3/HTTPParser_8h.html#a5cbfb04b51e77d833aa10bd872425ef1", null ],
    [ "encode_websocket_handshake_reply", "dd/dc3/HTTPParser_8h.html#a6bc66b6e0b7a0b9b3a85d8b49f83d370", null ],
    [ "encode_websocket_handshake_request", "dd/dc3/HTTPParser_8h.html#a8278d010b55b18e767535bdf6df227b3", null ],
    [ "parse_http_request", "dd/dc3/HTTPParser_8h.html#a71f86faf7244d7e4a641262469d1da30", null ],
    [ "parse_websocket_url", "dd/dc3/HTTPParser_8h.html#a62560b9078b9beb91c66bf7938c5d6e2", null ]
];