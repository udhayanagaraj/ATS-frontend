<template>
    <div class="container-fluid bg-primary">
       
        <div class="search-c  d-flex ">
            <div class="form-group  mr-2">
                <select class="form-control bg-primary" style="width:110px;">
                    <option value="" class="bg-light">
                        Search By 
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1"/>
                        </svg>
                    </option>
                    <option value="Tamil Nadu" class="bg-light">Tamil Nadu</option>
                    <option value="Maharastra" class="bg-light">Maharastra</option>
                    <option value="Kerala" class="bg-light">Kerala</option>
                    <option value="Andhra Pradesh" class="bg-light">Andhra Pradesh</option>
                    <option value="Karnataka" class="bg-light">Karnataka</option>
                </select>
            </div>
            <input type="text" class="form-control " placeholder="Search">
            <button class="btn btn-primary">Search</button>
        </div>
        
        <div class="container" >
        </div>
    </div>


</template>

<script>
export default {
   name:'search'
};
</script>

<style scoped>

.container-fluid > * {
    width: auto;
}


.search-c {
    margin-top: 1x;
}
</style>