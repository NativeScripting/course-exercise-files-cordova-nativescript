"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var file_system_1 = require("tns-core-modules/file-system");
function getPokemonList() {
    var file = file_system_1.knownFolders.currentApp().getFile("pokemon-data/pokemon.json");
    return new Promise(function (resolve, reject) {
        file
            .readText()
            .then(function (content) { return resolve(JSON.parse(content)); })
            .catch(function (err) { return reject(err); });
    });
}
exports.getPokemonList = getPokemonList;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9rZW1vbi1kYXRhLXNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwb2tlbW9uLWRhdGEtc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDREQUE0RDtBQUc1RDtJQUNFLElBQU0sSUFBSSxHQUFHLDBCQUFZLENBQUMsVUFBVSxFQUFFLENBQUMsT0FBTyxDQUFDLDJCQUEyQixDQUFDLENBQUM7SUFFNUUsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07UUFDakMsSUFBSTthQUNELFFBQVEsRUFBRTthQUNWLElBQUksQ0FBQyxVQUFBLE9BQU8sSUFBSSxPQUFBLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQTVCLENBQTRCLENBQUM7YUFDN0MsS0FBSyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFYLENBQVcsQ0FBQyxDQUFDO0lBQy9CLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQztBQVRELHdDQVNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsga25vd25Gb2xkZXJzIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZmlsZS1zeXN0ZW1cIjtcbmltcG9ydCB7IFBva2Vtb24gfSBmcm9tIFwifi9tb2RlbC9wb2tlbW9uXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQb2tlbW9uTGlzdCgpOiBQcm9taXNlPFBva2Vtb25bXT4ge1xuICBjb25zdCBmaWxlID0ga25vd25Gb2xkZXJzLmN1cnJlbnRBcHAoKS5nZXRGaWxlKFwicG9rZW1vbi1kYXRhL3Bva2Vtb24uanNvblwiKTtcblxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGZpbGVcbiAgICAgIC5yZWFkVGV4dCgpXG4gICAgICAudGhlbihjb250ZW50ID0+IHJlc29sdmUoSlNPTi5wYXJzZShjb250ZW50KSkpXG4gICAgICAuY2F0Y2goZXJyID0+IHJlamVjdChlcnIpKTtcbiAgfSk7XG59XG4iXX0=