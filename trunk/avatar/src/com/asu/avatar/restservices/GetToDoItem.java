package com.asu.avatar.restservices;
/**
 * @author Vasu Gupta
 *
 */

import java.io.IOException;
import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;
import org.json.JSONObject;

import com.asu.avatar.domain.UserInfo;
import com.asu.avatar.restservices.util.RestServiceConstants;
import com.asu.avatar.restservices.util.RestUtil;
import com.asu.avatar.util.Constants;

public class GetToDoItem extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private static Log log = LogFactory.getLog(RestUtil.class);

	public void init(ServletConfig config) throws ServletException {
		super.init(config);
	}

	public void destroy() {

	}

	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		doPost(request, response);
	}

	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws IOException, ServletException {

		log.info("service: " + request.getRequestURL() + "?"
				+ request.getQueryString());

		Long userID = null;
		String dateRequest = null;

		try {
			String reqParametersStr = RestServiceConstants.GET_TO_DO_MANDATORY_PARAMETERS;

			// checking the mandatory parameters
			RestUtil.chkReqParameter(request, reqParametersStr);

			// get the parameters
			userID = Long.parseLong(request.getParameter(Constants.USER_ID_PARAM));
			dateRequest = (String) request.getParameter(Constants.DATE_REQUESTED_PARAM);
		
			
			// some service call to the db for retreiving data from db
			JSONObject obj = new JSONObject();
			obj.put("response", "this is the response by a web service");

			// print JSON
			RestUtil.printJSONResponse(request, response, obj.toString());
		} catch (Exception e) {
			log.error("Exception in GetToDoItem::::: " + e.getMessage());
			e.printStackTrace();
		}
	}

}
