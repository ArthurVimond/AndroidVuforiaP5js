package com.vuforia.samples.VuforiaSamples.p5js;

import android.app.Activity;
import android.webkit.JavascriptInterface;
import android.widget.Toast;

/**
 * Created by Arthur Vimond on 16/09/2016.
 */
public class JsInterface {

    private Activity activity;

    public JsInterface(Activity activity) {
        this.activity = activity;
    }

    // Called by Javascript
    @JavascriptInterface
    public void showToast(String toast) {
        Toast.makeText(activity, toast, Toast.LENGTH_SHORT).show();
    }

}