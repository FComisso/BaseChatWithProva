
const example_data = { "results": [{ "id": "P0029986-1-H3_rev4.pdf", "project": "P0029986-1", "category": "H", "number": "3", "revision": "4", "rank": 0.9112597350031137, "pages": [51, 18, 65, 67, 58, 55, 21, 13, 54, 62, 56, 61, 52, 63, 66, 64, 12, 14, 15, 25, 20, 53, 60, 22, 16, 59, 68, 50, 23, 17, 19, 69, 70, 24, 11, 49, 73, 5, 57, 3, 2, 4] }, { "id": "P0029986-1-H6_rev2.pdf", "project": "P0029986-1", "category": "H", "number": "6", "revision": "2", "rank": 0.7071160208433867, "pages": [1466, 1713, 1170, 216, 17, 1391, 40, 1791, 20, 30, 1770, 7, 38, 2, 10, 11, 13, 14, 12, 209, 3, 5, 6] }, { "id": "P0017580-1-H6_rev3.pdf", "project": "P0017580-1", "category": "H", "number": "6", "revision": "3", "rank": 0.6785885393619537, "pages": [105, 107, 93, 91, 115, 101, 117, 103, 99, 119, 97, 95, 133, 109, 5, 165, 157, 159, 148, 154, 100, 131, 141, 151, 156, 111, 158, 155, 79, 160, 161, 140, 132, 149, 162, 121, 142, 152, 153, 13, 113, 69, 150, 15, 61, 98, 3] }, { "id": "P0017580-1-H7_rev3.pdf", "project": "P0017580-1", "category": "H", "number": "7", "revision": "3", "rank": 0.6708786487579346, "pages": [107, 111, 125, 105, 103, 123, 99, 113, 101, 115, 109, 127, 117, 160, 108, 141, 173, 170, 157, 119, 2, 139, 161, 166, 140, 150, 159, 169, 106, 148, 168, 87, 162, 149, 156, 164, 167, 14, 121, 129, 163, 165, 158, 59, 40, 54, 77, 138] }, { "id": "P0029986-1-H5_rev2.pdf", "project": "P0029986-1", "category": "H", "number": "5", "revision": "2", "rank": 0.6427462287247181, "pages": [181, 12, 119, 179, 176, 14, 165, 3, 4, 6, 2, 20, 1] }, { "id": "P0029986-1-H8_rev3.pdf", "project": "P0029986-1", "category": "H", "number": "8", "revision": "3", "rank": 0.5792075768113136, "pages": [63, 256, 20, 322, 5, 509, 575, 321, 316, 19, 711, 9, 6, 3, 4] }, { "id": "P0029986-1-H4_rev3.pdf", "project": "P0029986-1", "category": "H", "number": "4", "revision": "3", "rank": 0.5783921163529158, "pages": [5, 573, 4, 562, 17, 557, 565, 571, 545, 553, 549, 552, 561, 567, 558, 569, 3, 556, 554, 1, 560, 564, 548, 550, 566, 568, 559, 555] }, { "id": "P0029986-1-H10_rev1.pdf", "project": "P0029986-1", "category": "H", "number": "10", "revision": "1", "rank": 0.5761111108586192, "pages": [501, 15, 228, 367, 235, 170, 234, 788, 56, 14, 822, 2, 5, 6] }, { "id": "P0019824-1-H11_rev3.pdf", "project": "P0019824-1", "category": "H", "number": "11", "revision": "3", "rank": 0.5685793217271566, "pages": [452, 30, 396, 22, 402, 401, 400, 403, 397, 399, 398, 273, 185, 249, 286, 420, 227, 204, 264, 426, 2, 417, 423, 346, 283, 277, 395, 269, 29, 433, 28, 411, 471, 393, 392, 202, 198] }, { "id": "P0029986-1-H7_rev2.pdf", "project": "P0029986-1", "category": "H", "number": "7", "revision": "2", "rank": 0.5525362137705088, "pages": [326, 101, 164, 38, 159, 163, 966, 977, 16, 17, 460, 741, 2] }, { "id": "P0029986-1-H8_rev2.pdf", "project": "P0029986-1", "category": "H", "number": "8", "revision": "2", "rank": 0.5375679638236761, "pages": [711, 20, 316, 5, 256, 321, 575, 509, 322, 63, 19, 9, 4, 3, 2] }, { "id": "P0029986-1-H13_rev3.pdf", "project": "P0029986-1", "category": "H", "number": "13", "revision": "3", "rank": 0.5290953330695629, "pages": [35, 105, 32, 5, 14, 13, 11, 2, 3, 7] }, { "id": "P0023701-1-H1_rev0.pdf", "project": "P0023701-1", "category": "H", "number": "1", "revision": "0", "rank": 0.5083333598449826, "pages": [40, 41, 42, 39, 1] }, { "id": "P0029986-1-H11_rev3.pdf", "project": "P0029986-1", "category": "H", "number": "11", "revision": "3", "rank": 0.4501906428486109, "pages": [64, 28, 25, 5, 27, 2, 6] }, { "id": "P0018029-1-H1_rev0.pdf", "project": "P0018029-1", "category": "H", "number": "1", "revision": "0", "rank": 0.3540510134771466, "pages": [1] }, { "id": "P0017580-1-H10_rev2.pdf", "project": "P0017580-1", "category": "H", "number": "10", "revision": "2", "rank": 0.2711164578795433, "pages": [9, 302, 397, 483, 2, 11, 80, 361, 368, 190, 193, 57] }, { "id": "P0010318-1-H1_rev1.pdf", "project": "P0010318-1", "category": "H", "number": "1", "revision": "1", "rank": 0.26991150341928005, "pages": [20, 1] }, { "id": "P0017580-1-H9_rev2.pdf", "project": "P0017580-1", "category": "H", "number": "9", "revision": "2", "rank": 0.26251248084008694, "pages": [9, 2, 445, 11, 54, 76, 136, 53, 79] }, { "id": "P0019824-1-H13_rev0.pdf", "project": "P0019824-1", "category": "H", "number": "13", "revision": "0", "rank": 0.2364341076463461, "pages": [480, 479, 482, 398, 407, 401, 405, 402, 400, 399, 3, 403, 439, 14, 443, 406, 460, 184, 404, 437, 2, 462, 436, 461, 466, 465, 464, 441, 458] }, { "id": "P0017580-1-H8_rev2.pdf", "project": "P0017580-1", "category": "H", "number": "8", "revision": "2", "rank": 0.2208770434372127, "pages": [6, 2, 830, 640, 811, 886, 663, 304, 839] }, { "id": "P0029666-2-H5_rev0.pdf", "project": "P0029666-2", "category": "H", "number": "5", "revision": "0", "rank": 0.2178571440745145, "pages": [1] }, { "id": "P0017580-1-H12_rev3.pdf", "project": "P0017580-1", "category": "H", "number": "12", "revision": "3", "rank": 0.20906103332526982, "pages": [2, 53, 12, 92, 90, 97, 94, 8, 26, 55] }, { "id": "P0017580-1-H13_rev3.pdf", "project": "P0017580-1", "category": "H", "number": "13", "revision": "3", "rank": 0.20587595691904426, "pages": [5, 2, 456, 27, 99, 48, 144, 195, 240, 8] }, { "id": "14-047-H1_rev0.pdf", "project": "14-047", "category": "H", "number": "1", "revision": "0", "rank": 0.20065789623185992, "pages": [64, 1, 2, 81, 53] }, { "id": "P0017580-1-H14_rev4.pdf", "project": "P0017580-1", "category": "H", "number": "14", "revision": "4", "rank": 0.19971600361168385, "pages": [7, 9, 2, 95, 629, 13, 11, 140, 186, 239] }, { "id": "P0029666-2-H3_rev0.pdf", "project": "P0029666-2", "category": "H", "number": "3", "revision": "0", "rank": 0.19934640754945576, "pages": [1] }, { "id": "P0017580-1-H3_rev1.pdf", "project": "P0017580-1", "category": "H", "number": "3", "revision": "1", "rank": 0.1938405865803361, "pages": [2, 18, 13] }, { "id": "P0017580-1-H4_rev1.pdf", "project": "P0017580-1", "category": "H", "number": "4", "revision": "1", "rank": 0.19079405721276999, "pages": [2] }, { "id": "P0017580-1-H5_rev2.pdf", "project": "P0017580-1", "category": "H", "number": "5", "revision": "2", "rank": 0.1753126506228, "pages": [2, 13, 31, 30] }, { "id": "P0019824-1-H14_rev1.pdf", "project": "P0019824-1", "category": "H", "number": "14", "revision": "1", "rank": 0.16355877718888223, "pages": [2] }, { "id": "P0017580-1-H15_rev0.pdf", "project": "P0017580-1", "category": "H", "number": "15", "revision": "0", "rank": 0.1581761217676103, "pages": [51, 2, 88] }, { "id": "P0019824-1-H1_rev1.pdf", "project": "P0019824-1", "category": "H", "number": "1", "revision": "1", "rank": 0.1546165351755917, "pages": [2, 32, 19] }, { "id": "P0019824-1-H16_rev2.pdf", "project": "P0019824-1", "category": "H", "number": "16", "revision": "2", "rank": 0.15023417375050485, "pages": [2, 35, 28] }, { "id": "P0019824-1-H17_rev2.pdf", "project": "P0019824-1", "category": "H", "number": "17", "revision": "2", "rank": 0.1473489156924188, "pages": [2] }, { "id": "P0019657-1-H3_rev0.pdf", "project": "P0019657-1", "category": "H", "number": "3", "revision": "0", "rank": 0.14663462084718049, "pages": [61, 70, 72, 59, 73] }, { "id": "P0017580-1-H2_rev1.pdf", "project": "P0017580-1", "category": "H", "number": "2", "revision": "1", "rank": 0.14663462084718049, "pages": [2] }, { "id": "P0029666-2-H1_rev0.pdf", "project": "P0029666-2", "category": "H", "number": "1", "revision": "0", "rank": 0.14454976841807365, "pages": [1] }, { "id": "P0016696-1-H1_rev0.pdf", "project": "P0016696-1", "category": "H", "number": "1", "revision": "0", "rank": 0.1425233599729836, "pages": [10, 22, 37, 8, 21] }, { "id": "P0019824-1-H15_rev2.pdf", "project": "P0019824-1", "category": "H", "number": "15", "revision": "2", "rank": 0.14146723528392613, "pages": [115, 123, 119, 2] }, { "id": "P0017580-1-H1_rev1.pdf", "project": "P0017580-1", "category": "H", "number": "1", "revision": "1", "rank": 0.1320346319116652, "pages": [2] }, { "id": "P0025925-1-H1_rev1.pdf", "project": "P0025925-1", "category": "H", "number": "1", "revision": "1", "rank": 0.13034188677556813, "pages": [180, 142] }, { "id": "P0026443-1-H1_rev0.pdf", "project": "P0026443-1", "category": "H", "number": "1", "revision": "0", "rank": 0.12978722993284464, "pages": [24, 1] }, { "id": "P0029666-2-H2_rev1.pdf", "project": "P0029666-2", "category": "H", "number": "2", "revision": "1", "rank": 0.12869197688996792, "pages": [1, 287, 253] }, { "id": "10-493-H2_rev0.pdf", "project": "10-493", "category": "H", "number": "2", "revision": "0", "rank": 0.12151394784450531, "pages": [351, 350, 359] }, { "id": "10-375-H1_rev0.pdf", "project": "10-375", "category": "H", "number": "1", "revision": "0", "rank": 0.12151394784450531, "pages": [73, 1, 13] }, { "id": "P0029596-1-H22_rev3.pdf", "project": "P0029596-1", "category": "H", "number": "22", "revision": "3", "rank": 0.119140625, "pages": [11] }, { "id": "12-343-H29_rev0.pdf", "project": "12-343", "category": "H", "number": "29", "revision": "0", "rank": 0.11730769241694361, "pages": [19] }, { "id": "P0016696-1-H2_rev0.pdf", "project": "P0016696-1", "category": "H", "number": "2", "revision": "0", "rank": 0.11254612682387233, "pages": [8, 10] }, { "id": "13-139-H2_rev2.pdf", "project": "13-139", "category": "H", "number": "2", "revision": "2", "rank": 0.11172161216381937, "pages": [76] }, { "id": "09-094-H1_rev2.pdf", "project": "09-094", "category": "H", "number": "1", "revision": "2", "rank": 0.11131386773195118, "pages": [73] }, { "id": "P0028506-1-H2_rev6.pdf", "project": "P0028506-1", "category": "H", "number": "2", "revision": "6", "rank": 0.106271778116934, "pages": [3] }, { "id": "P0031102-1-H1_rev0.pdf", "project": "P0031102-1", "category": "H", "number": "1", "revision": "0", "rank": 0.1037414944730699, "pages": [1] }, { "id": "P0017107-1-H58_rev0.pdf", "project": "P0017107-1", "category": "H", "number": "58", "revision": "0", "rank": 0.1009933773893863, "pages": [3] }, { "id": "09-657-H12_rev2.pdf", "project": "09-657", "category": "H", "number": "12", "revision": "2", "rank": 0.10066006914712489, "pages": [5, 1] }, { "id": "P0025936-1-H1_rev1.pdf", "project": "P0025936-1", "category": "H", "number": "1", "revision": "1", "rank": 0.09775641153100878, "pages": [67] }, { "id": "P0030719-1-H1_rev0.pdf", "project": "P0030719-1", "category": "H", "number": "1", "revision": "0", "rank": 0.09651898976881057, "pages": [202, 205] }, { "id": "11-700-H1_rev0.pdf", "project": "11-700", "category": "H", "number": "1", "revision": "0", "rank": 0.09621451294515282, "pages": [53] }, { "id": "P0028506-1-H1_rev5.pdf", "project": "P0028506-1", "category": "H", "number": "1", "revision": "5", "rank": 0.09591194638051093, "pages": [3, 43] }, { "id": "P0017107-1-H9_rev0.pdf", "project": "P0017107-1", "category": "H", "number": "9", "revision": "0", "rank": 0.09270516829565167, "pages": [6] }, { "id": "P0017580-1-H11_rev1.pdf", "project": "P0017580-1", "category": "H", "number": "11", "revision": "1", "rank": 0.08944281516596675, "pages": [2] }, { "id": "P0027751-1-H1_rev0.pdf", "project": "P0027751-1", "category": "H", "number": "1", "revision": "0", "rank": 0.08918128721415997, "pages": [4, 15, 44] }, { "id": "P0029972-1-H1_rev0.pdf", "project": "P0029972-1", "category": "H", "number": "1", "revision": "0", "rank": 0.08640226512216032, "pages": [28] }, { "id": "P0018881-1-H1_rev1.pdf", "project": "P0018881-1", "category": "H", "number": "1", "revision": "1", "rank": 0.08615819225087762, "pages": [73] }, { "id": "P0029555-1-H2_rev0.pdf", "project": "P0029555-1", "category": "H", "number": "2", "revision": "0", "rank": 0.08591548993717879, "pages": [876] }, { "id": "P0027796-1-H1_rev2.pdf", "project": "P0027796-1", "category": "H", "number": "1", "revision": "2", "rank": 0.08567415818106383, "pages": [457] }, { "id": "P0023080-1-H2_rev1.pdf", "project": "P0023080-1", "category": "H", "number": "2", "revision": "1", "rank": 0.08543417567852885, "pages": [28] }, { "id": "P0018881-1-H6_rev0.pdf", "project": "P0018881-1", "category": "H", "number": "6", "revision": "0", "rank": 0.08448753226548433, "pages": [24] }, { "id": "P0026291-1-H3_rev1.pdf", "project": "P0026291-1", "category": "H", "number": "3", "revision": "1", "rank": 0.08402203978039324, "pages": [132] }, { "id": "P0026291-1-H4_rev2.pdf", "project": "P0026291-1", "category": "H", "number": "4", "revision": "2", "rank": 0.08379121089819819, "pages": [188] }, { "id": "P0028506-7-H1_rev5.pdf", "project": "P0028506-7", "category": "H", "number": "1", "revision": "5", "rank": 0.08356164605356753, "pages": [104] }, { "id": "P0018881-1-H3_rev1.pdf", "project": "P0018881-1", "category": "H", "number": "3", "revision": "1", "rank": 0.083333331043832, "pages": [24] }, { "id": "P0029555-1-H1_rev2.pdf", "project": "P0029555-1", "category": "H", "number": "1", "revision": "2", "rank": 0.0828804363263771, "pages": [136] }] }


export default example_data;