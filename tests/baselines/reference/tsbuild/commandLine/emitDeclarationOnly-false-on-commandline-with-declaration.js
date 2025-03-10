Input::
//// [/lib/lib.d.ts]
/// <reference no-default-lib="true"/>
interface Boolean {}
interface Function {}
interface CallableFunction {}
interface NewableFunction {}
interface IArguments {}
interface Number { toExponential: any; }
interface Object {}
interface RegExp {}
interface String { charAt: any; }
interface Array<T> { length: number; [n: number]: T; }
interface ReadonlyArray<T> {}
declare const console: { log(msg: any): void; };

//// [/src/project1/src/a.ts]
export const a = 10;const aLocal = 10;

//// [/src/project1/src/b.ts]
export const b = 10;const bLocal = 10;

//// [/src/project1/src/c.ts]
import { a } from "./a";export const c = a;

//// [/src/project1/src/d.ts]
import { b } from "./b";export const d = b;

//// [/src/project1/src/tsconfig.json]
{"compilerOptions":{"declaration":true,"emitDeclarationOnly":true}}

//// [/src/project2/src/e.ts]
export const e = 10;

//// [/src/project2/src/f.ts]
import { a } from "../../project1/src/a"; export const f = a;

//// [/src/project2/src/g.ts]
import { b } from "../../project1/src/b"; export const g = b;

//// [/src/project2/src/tsconfig.json]
{"compilerOptions":{"declaration":true,"emitDeclarationOnly":true},"references":[{"path":"../../project1/src"}]}



Output::
/lib/tsc --b /src/project2/src --verbose
[[90m12:00:19 AM[0m] Projects in this build: 
    * src/project1/src/tsconfig.json
    * src/project2/src/tsconfig.json

[[90m12:00:20 AM[0m] Project 'src/project1/src/tsconfig.json' is out of date because output file 'src/project1/src/a.d.ts' does not exist

[[90m12:00:21 AM[0m] Building project '/src/project1/src/tsconfig.json'...

[[90m12:00:26 AM[0m] Project 'src/project2/src/tsconfig.json' is out of date because output file 'src/project2/src/e.d.ts' does not exist

[[90m12:00:27 AM[0m] Building project '/src/project2/src/tsconfig.json'...

[96msrc/project2/src/tsconfig.json[0m:[93m1[0m:[93m82[0m - [91merror[0m[90m TS6306: [0mReferenced project '/src/project1/src' must have setting "composite": true.

[7m1[0m {"compilerOptions":{"declaration":true,"emitDeclarationOnly":true},"references":[{"path":"../../project1/src"}]}
[7m [0m [91m                                                                                 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m


Found 1 error.

exitCode:: ExitStatus.DiagnosticsPresent_OutputsGenerated
Program root files: ["/src/project1/src/a.ts","/src/project1/src/b.ts","/src/project1/src/c.ts","/src/project1/src/d.ts"]
Program options: {"declaration":true,"emitDeclarationOnly":true,"configFilePath":"/src/project1/src/tsconfig.json"}
Program structureReused: Not
Program files::
/lib/lib.d.ts
/src/project1/src/a.ts
/src/project1/src/b.ts
/src/project1/src/c.ts
/src/project1/src/d.ts

Semantic diagnostics in builder refreshed for::
/lib/lib.d.ts
/src/project1/src/a.ts
/src/project1/src/b.ts
/src/project1/src/c.ts
/src/project1/src/d.ts

Shape signatures in builder refreshed for::
/lib/lib.d.ts (used version)
/src/project1/src/a.ts (computed .d.ts during emit)
/src/project1/src/b.ts (computed .d.ts during emit)
/src/project1/src/c.ts (computed .d.ts during emit)
/src/project1/src/d.ts (computed .d.ts during emit)

Program root files: ["/src/project2/src/e.ts","/src/project2/src/f.ts","/src/project2/src/g.ts"]
Program options: {"declaration":true,"emitDeclarationOnly":true,"configFilePath":"/src/project2/src/tsconfig.json"}
Program structureReused: Not
Program files::
/lib/lib.d.ts
/src/project2/src/e.ts
/src/project1/src/a.d.ts
/src/project2/src/f.ts
/src/project1/src/b.d.ts
/src/project2/src/g.ts

No cached semantic diagnostics in the builder::

No shapes updated in the builder::


//// [/src/project1/src/a.d.ts]
export declare const a = 10;


//// [/src/project1/src/b.d.ts]
export declare const b = 10;


//// [/src/project1/src/c.d.ts]
export declare const c = 10;


//// [/src/project1/src/d.d.ts]
export declare const d = 10;




Change:: no-change-run
Input::


Output::
/lib/tsc --b /src/project2/src --verbose
[[90m12:00:28 AM[0m] Projects in this build: 
    * src/project1/src/tsconfig.json
    * src/project2/src/tsconfig.json

[[90m12:00:29 AM[0m] Project 'src/project1/src/tsconfig.json' is up to date because newest input 'src/project1/src/d.ts' is older than output 'src/project1/src/a.d.ts'

[[90m12:00:30 AM[0m] Project 'src/project2/src/tsconfig.json' is out of date because output file 'src/project2/src/e.d.ts' does not exist

[[90m12:00:31 AM[0m] Building project '/src/project2/src/tsconfig.json'...

[96msrc/project2/src/tsconfig.json[0m:[93m1[0m:[93m82[0m - [91merror[0m[90m TS6306: [0mReferenced project '/src/project1/src' must have setting "composite": true.

[7m1[0m {"compilerOptions":{"declaration":true,"emitDeclarationOnly":true},"references":[{"path":"../../project1/src"}]}
[7m [0m [91m                                                                                 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m


Found 1 error.

exitCode:: ExitStatus.DiagnosticsPresent_OutputsSkipped
Program root files: ["/src/project2/src/e.ts","/src/project2/src/f.ts","/src/project2/src/g.ts"]
Program options: {"declaration":true,"emitDeclarationOnly":true,"configFilePath":"/src/project2/src/tsconfig.json"}
Program structureReused: Not
Program files::
/lib/lib.d.ts
/src/project2/src/e.ts
/src/project1/src/a.d.ts
/src/project2/src/f.ts
/src/project1/src/b.d.ts
/src/project2/src/g.ts

No cached semantic diagnostics in the builder::

No shapes updated in the builder::




Change:: change
Input::
//// [/src/project1/src/a.ts]
export const a = 10;const aLocal = 10;const aa = 10;



Output::
/lib/tsc --b /src/project2/src --verbose
[[90m12:00:33 AM[0m] Projects in this build: 
    * src/project1/src/tsconfig.json
    * src/project2/src/tsconfig.json

[[90m12:00:34 AM[0m] Project 'src/project1/src/tsconfig.json' is out of date because output 'src/project1/src/a.d.ts' is older than input 'src/project1/src/a.ts'

[[90m12:00:35 AM[0m] Building project '/src/project1/src/tsconfig.json'...

[[90m12:00:40 AM[0m] Project 'src/project2/src/tsconfig.json' is out of date because output file 'src/project2/src/e.d.ts' does not exist

[[90m12:00:41 AM[0m] Building project '/src/project2/src/tsconfig.json'...

[96msrc/project2/src/tsconfig.json[0m:[93m1[0m:[93m82[0m - [91merror[0m[90m TS6306: [0mReferenced project '/src/project1/src' must have setting "composite": true.

[7m1[0m {"compilerOptions":{"declaration":true,"emitDeclarationOnly":true},"references":[{"path":"../../project1/src"}]}
[7m [0m [91m                                                                                 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m


Found 1 error.

exitCode:: ExitStatus.DiagnosticsPresent_OutputsGenerated
Program root files: ["/src/project1/src/a.ts","/src/project1/src/b.ts","/src/project1/src/c.ts","/src/project1/src/d.ts"]
Program options: {"declaration":true,"emitDeclarationOnly":true,"configFilePath":"/src/project1/src/tsconfig.json"}
Program structureReused: Not
Program files::
/lib/lib.d.ts
/src/project1/src/a.ts
/src/project1/src/b.ts
/src/project1/src/c.ts
/src/project1/src/d.ts

Semantic diagnostics in builder refreshed for::
/lib/lib.d.ts
/src/project1/src/a.ts
/src/project1/src/b.ts
/src/project1/src/c.ts
/src/project1/src/d.ts

Shape signatures in builder refreshed for::
/lib/lib.d.ts (used version)
/src/project1/src/a.ts (computed .d.ts during emit)
/src/project1/src/b.ts (computed .d.ts during emit)
/src/project1/src/c.ts (computed .d.ts during emit)
/src/project1/src/d.ts (computed .d.ts during emit)

Program root files: ["/src/project2/src/e.ts","/src/project2/src/f.ts","/src/project2/src/g.ts"]
Program options: {"declaration":true,"emitDeclarationOnly":true,"configFilePath":"/src/project2/src/tsconfig.json"}
Program structureReused: Not
Program files::
/lib/lib.d.ts
/src/project2/src/e.ts
/src/project1/src/a.d.ts
/src/project2/src/f.ts
/src/project1/src/b.d.ts
/src/project2/src/g.ts

No cached semantic diagnostics in the builder::

No shapes updated in the builder::


//// [/src/project1/src/a.d.ts] file written with same contents
//// [/src/project1/src/b.d.ts] file written with same contents
//// [/src/project1/src/c.d.ts] file written with same contents
//// [/src/project1/src/d.d.ts] file written with same contents


Change:: emit js files
Input::


Output::
/lib/tsc --b /src/project2/src --verbose --emitDeclarationOnly false
[[90m12:00:42 AM[0m] Projects in this build: 
    * src/project1/src/tsconfig.json
    * src/project2/src/tsconfig.json

[[90m12:00:43 AM[0m] Project 'src/project1/src/tsconfig.json' is out of date because output file 'src/project1/src/a.js' does not exist

[[90m12:00:44 AM[0m] Building project '/src/project1/src/tsconfig.json'...

[[90m12:00:53 AM[0m] Project 'src/project2/src/tsconfig.json' is out of date because output file 'src/project2/src/e.js' does not exist

[[90m12:00:54 AM[0m] Building project '/src/project2/src/tsconfig.json'...

[96msrc/project2/src/tsconfig.json[0m:[93m1[0m:[93m82[0m - [91merror[0m[90m TS6306: [0mReferenced project '/src/project1/src' must have setting "composite": true.

[7m1[0m {"compilerOptions":{"declaration":true,"emitDeclarationOnly":true},"references":[{"path":"../../project1/src"}]}
[7m [0m [91m                                                                                 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m


Found 1 error.

exitCode:: ExitStatus.DiagnosticsPresent_OutputsGenerated
Program root files: ["/src/project1/src/a.ts","/src/project1/src/b.ts","/src/project1/src/c.ts","/src/project1/src/d.ts"]
Program options: {"declaration":true,"emitDeclarationOnly":false,"configFilePath":"/src/project1/src/tsconfig.json"}
Program structureReused: Not
Program files::
/lib/lib.d.ts
/src/project1/src/a.ts
/src/project1/src/b.ts
/src/project1/src/c.ts
/src/project1/src/d.ts

Semantic diagnostics in builder refreshed for::
/lib/lib.d.ts
/src/project1/src/a.ts
/src/project1/src/b.ts
/src/project1/src/c.ts
/src/project1/src/d.ts

Shape signatures in builder refreshed for::
/lib/lib.d.ts (used version)
/src/project1/src/a.ts (computed .d.ts during emit)
/src/project1/src/b.ts (computed .d.ts during emit)
/src/project1/src/c.ts (computed .d.ts during emit)
/src/project1/src/d.ts (computed .d.ts during emit)

Program root files: ["/src/project2/src/e.ts","/src/project2/src/f.ts","/src/project2/src/g.ts"]
Program options: {"declaration":true,"emitDeclarationOnly":false,"configFilePath":"/src/project2/src/tsconfig.json"}
Program structureReused: Not
Program files::
/lib/lib.d.ts
/src/project2/src/e.ts
/src/project1/src/a.d.ts
/src/project2/src/f.ts
/src/project1/src/b.d.ts
/src/project2/src/g.ts

No cached semantic diagnostics in the builder::

No shapes updated in the builder::


//// [/src/project1/src/a.d.ts] file written with same contents
//// [/src/project1/src/a.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.a = void 0;
exports.a = 10;
var aLocal = 10;
var aa = 10;


//// [/src/project1/src/b.d.ts] file written with same contents
//// [/src/project1/src/b.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.b = void 0;
exports.b = 10;
var bLocal = 10;


//// [/src/project1/src/c.d.ts] file written with same contents
//// [/src/project1/src/c.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.c = void 0;
var a_1 = require("./a");
exports.c = a_1.a;


//// [/src/project1/src/d.d.ts] file written with same contents
//// [/src/project1/src/d.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.d = void 0;
var b_1 = require("./b");
exports.d = b_1.b;




Change:: no-change-run
Input::


Output::
/lib/tsc --b /src/project2/src --verbose
[[90m12:00:55 AM[0m] Projects in this build: 
    * src/project1/src/tsconfig.json
    * src/project2/src/tsconfig.json

[[90m12:00:56 AM[0m] Project 'src/project1/src/tsconfig.json' is up to date because newest input 'src/project1/src/a.ts' is older than output 'src/project1/src/a.d.ts'

[[90m12:00:57 AM[0m] Project 'src/project2/src/tsconfig.json' is out of date because output file 'src/project2/src/e.d.ts' does not exist

[[90m12:00:58 AM[0m] Building project '/src/project2/src/tsconfig.json'...

[96msrc/project2/src/tsconfig.json[0m:[93m1[0m:[93m82[0m - [91merror[0m[90m TS6306: [0mReferenced project '/src/project1/src' must have setting "composite": true.

[7m1[0m {"compilerOptions":{"declaration":true,"emitDeclarationOnly":true},"references":[{"path":"../../project1/src"}]}
[7m [0m [91m                                                                                 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m


Found 1 error.

exitCode:: ExitStatus.DiagnosticsPresent_OutputsSkipped
Program root files: ["/src/project2/src/e.ts","/src/project2/src/f.ts","/src/project2/src/g.ts"]
Program options: {"declaration":true,"emitDeclarationOnly":true,"configFilePath":"/src/project2/src/tsconfig.json"}
Program structureReused: Not
Program files::
/lib/lib.d.ts
/src/project2/src/e.ts
/src/project1/src/a.d.ts
/src/project2/src/f.ts
/src/project1/src/b.d.ts
/src/project2/src/g.ts

No cached semantic diagnostics in the builder::

No shapes updated in the builder::




Change:: no change run with js emit
Input::


Output::
/lib/tsc --b /src/project2/src --verbose --emitDeclarationOnly false
[[90m12:00:59 AM[0m] Projects in this build: 
    * src/project1/src/tsconfig.json
    * src/project2/src/tsconfig.json

[[90m12:01:00 AM[0m] Project 'src/project1/src/tsconfig.json' is up to date because newest input 'src/project1/src/a.ts' is older than output 'src/project1/src/a.js'

[[90m12:01:01 AM[0m] Project 'src/project2/src/tsconfig.json' is out of date because output file 'src/project2/src/e.js' does not exist

[[90m12:01:02 AM[0m] Building project '/src/project2/src/tsconfig.json'...

[96msrc/project2/src/tsconfig.json[0m:[93m1[0m:[93m82[0m - [91merror[0m[90m TS6306: [0mReferenced project '/src/project1/src' must have setting "composite": true.

[7m1[0m {"compilerOptions":{"declaration":true,"emitDeclarationOnly":true},"references":[{"path":"../../project1/src"}]}
[7m [0m [91m                                                                                 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m


Found 1 error.

exitCode:: ExitStatus.DiagnosticsPresent_OutputsSkipped
Program root files: ["/src/project2/src/e.ts","/src/project2/src/f.ts","/src/project2/src/g.ts"]
Program options: {"declaration":true,"emitDeclarationOnly":false,"configFilePath":"/src/project2/src/tsconfig.json"}
Program structureReused: Not
Program files::
/lib/lib.d.ts
/src/project2/src/e.ts
/src/project1/src/a.d.ts
/src/project2/src/f.ts
/src/project1/src/b.d.ts
/src/project2/src/g.ts

No cached semantic diagnostics in the builder::

No shapes updated in the builder::




Change:: js emit with change
Input::
//// [/src/project1/src/b.ts]
export const b = 10;const bLocal = 10;const blocal = 10;



Output::
/lib/tsc --b /src/project2/src --verbose --emitDeclarationOnly false
[[90m12:01:04 AM[0m] Projects in this build: 
    * src/project1/src/tsconfig.json
    * src/project2/src/tsconfig.json

[[90m12:01:05 AM[0m] Project 'src/project1/src/tsconfig.json' is out of date because output 'src/project1/src/a.js' is older than input 'src/project1/src/b.ts'

[[90m12:01:06 AM[0m] Building project '/src/project1/src/tsconfig.json'...

[[90m12:01:15 AM[0m] Project 'src/project2/src/tsconfig.json' is out of date because output file 'src/project2/src/e.js' does not exist

[[90m12:01:16 AM[0m] Building project '/src/project2/src/tsconfig.json'...

[96msrc/project2/src/tsconfig.json[0m:[93m1[0m:[93m82[0m - [91merror[0m[90m TS6306: [0mReferenced project '/src/project1/src' must have setting "composite": true.

[7m1[0m {"compilerOptions":{"declaration":true,"emitDeclarationOnly":true},"references":[{"path":"../../project1/src"}]}
[7m [0m [91m                                                                                 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m


Found 1 error.

exitCode:: ExitStatus.DiagnosticsPresent_OutputsGenerated
Program root files: ["/src/project1/src/a.ts","/src/project1/src/b.ts","/src/project1/src/c.ts","/src/project1/src/d.ts"]
Program options: {"declaration":true,"emitDeclarationOnly":false,"configFilePath":"/src/project1/src/tsconfig.json"}
Program structureReused: Not
Program files::
/lib/lib.d.ts
/src/project1/src/a.ts
/src/project1/src/b.ts
/src/project1/src/c.ts
/src/project1/src/d.ts

Semantic diagnostics in builder refreshed for::
/lib/lib.d.ts
/src/project1/src/a.ts
/src/project1/src/b.ts
/src/project1/src/c.ts
/src/project1/src/d.ts

Shape signatures in builder refreshed for::
/lib/lib.d.ts (used version)
/src/project1/src/a.ts (computed .d.ts during emit)
/src/project1/src/b.ts (computed .d.ts during emit)
/src/project1/src/c.ts (computed .d.ts during emit)
/src/project1/src/d.ts (computed .d.ts during emit)

Program root files: ["/src/project2/src/e.ts","/src/project2/src/f.ts","/src/project2/src/g.ts"]
Program options: {"declaration":true,"emitDeclarationOnly":false,"configFilePath":"/src/project2/src/tsconfig.json"}
Program structureReused: Not
Program files::
/lib/lib.d.ts
/src/project2/src/e.ts
/src/project1/src/a.d.ts
/src/project2/src/f.ts
/src/project1/src/b.d.ts
/src/project2/src/g.ts

No cached semantic diagnostics in the builder::

No shapes updated in the builder::


//// [/src/project1/src/a.d.ts] file written with same contents
//// [/src/project1/src/a.js] file written with same contents
//// [/src/project1/src/b.d.ts] file written with same contents
//// [/src/project1/src/b.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.b = void 0;
exports.b = 10;
var bLocal = 10;
var blocal = 10;


//// [/src/project1/src/c.d.ts] file written with same contents
//// [/src/project1/src/c.js] file written with same contents
//// [/src/project1/src/d.d.ts] file written with same contents
//// [/src/project1/src/d.js] file written with same contents
