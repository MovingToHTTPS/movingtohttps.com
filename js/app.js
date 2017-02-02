
new Vue({
    el: '#app',

    // few filters available to change content in main area
    data: {
        platform: 'wordpress',
        hosting: '',
        control: 'max',
        // available options for above data
        options: {
            platform: {
                'wordpress': 'Wordpress',
                'joomla': 'Joomla',
                'magento': 'Magento',
                'shopify': 'Shopify',
                'custom-php': 'Custom PHP',
                '': 'Other / Unknown'
            },
            hosting: {
                'cloudflare': 'Cloudflare',
                'cpanel': 'cPanel / WHM',
                'plesk': 'Plesk',
                'custom-apache2': 'Apache2',
                'custom-nginx': 'Nginx',
                '': 'Other / Unknown'
            },
            control: {
                'max': 'I have full code access',
                'med': 'I have some code access',
                'min': 'I have access to page content & DNS only'
            }
        },
        showArea: {
            outline: true,
            preMove: true,
            duringMove: true,
            postMove: true,
            aboveAndBeyond: true
        }
    },

    // watch data for changes and update URL
    watch: {
        '$data': {
            handler: function () {
                var url = '?platform=' + this.platform;
                url += '&hosting=' + this.hosting;
                url += '&control=' + this.control;
                history.replaceState({}, '', url);
            },
            deep: true
        }
    },

    mounted: function () {

        // parse any url params
        var urlParams = {};
        location.search.substring(1).split('&').forEach(function (chunk) {
            var bits = chunk.split('=', 2),
                key = decodeURIComponent(bits[0]).toLowerCase();
            urlParams[key] = decodeURIComponent(bits[1]).toLowerCase();
        });

        // for any url params set, if it's an available option then set it
        if (urlParams) {
            if (urlParams.platform !== undefined && this.options.platform[urlParams.platform]) {
                this.platform = urlParams.platform;
            }
            if (urlParams.hosting !== undefined && this.options.hosting[urlParams.hosting]) {
                this.hosting = urlParams.hosting;
            }
            if (urlParams.control !== undefined && this.options.control[urlParams.control]) {
                this.control = urlParams.control;
            }
        }
    }
});
